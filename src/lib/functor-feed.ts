interface FeedItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  author?: string;
}

export async function fetchFunctorFeed(): Promise<{
  items: FeedItem[];
  error: string | null;
}> {
  try {
    const response = await fetch("https://functor.network/user/3197/feed", {
      headers: {
        Accept: "application/rss+xml, application/atom+xml, application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch feed");
    }

    const contentType = response.headers.get("content-type");
    let feedItems: FeedItem[] = [];

    if (contentType?.includes("application/json")) {
      // Handle JSON feed format
      const data = await response.json();
      feedItems = data.items || data.entries || [];
    } else if (contentType?.includes("xml")) {
      // Handle RSS/Atom feed
      const text = await response.text();
      // Use a simple XML parser approach for server-side parsing
      feedItems = parseXmlFeed(text);
    }

    return {
      items: feedItems.slice(0, 5), // Limit to 5 most recent items
      error: null,
    };
  } catch (err) {
    console.error("Error fetching Functor feed:", err);
    return {
      items: [],
      error:
        err instanceof Error ? err.message : "Failed to load feed",
    };
  }
}

function parseXmlFeed(xml: string): FeedItem[] {
  const items: FeedItem[] = [];

  // Simple regex-based XML parsing
  // Match RSS items
  const rssItemRegex =
    /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = rssItemRegex.exec(xml)) !== null) {
    const itemText = match[1];

    const title =
      itemText
        .match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]
        ?.replace(/<[^>]*>/g, "")
        .trim() || "Untitled";

    const link =
      itemText
        .match(
          /<link(?:\s[^>]*)?>(?:href=["'])?([^<"'>]+)/
        )?.[1]
        ?.trim() || "#";

    const pubDate =
      itemText
        .match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/)?.[1]
        ?.trim() || new Date().toISOString();

    const description =
      itemText
        .match(
          /<description[^>]*>([\s\S]*?)<\/description>/
        )?.[1]
        ?.replace(/<[^>]*>/g, "")
        .trim() || "";

    const id = items.length.toString();

    items.push({
      id,
      title,
      link,
      pubDate,
      description,
    });
  }

  return items;
}

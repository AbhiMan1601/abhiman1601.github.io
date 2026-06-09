import { ExternalLink } from "lucide-react";

interface FeedItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  author?: string;
}

interface FunctorFeedProps {
  items: FeedItem[];
  error?: string | null;
}

// Format date consistently across server and client
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    // Use toISOString and extract date part for consistency
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    
    return `${monthNames[month]} ${day}, ${year}`;
  } catch {
    return dateString;
  }
}

export function FunctorFeed({ items, error }: FunctorFeedProps) {
  if (error || items.length === 0) {
    return (
      <section className="space-y-4">
        <h2 className="font-serif text-l mb-6 md:mb-12 tracking-wide uppercase text-zinc-900 dark:text-white">
          Functor Feed
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {error ? `Unable to load feed: ${error}` : "No items available"}
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <h2 className="font-serif text-l mb-6 md:mb-12 tracking-wide uppercase text-zinc-900 dark:text-white">
        Functor Feed
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 py-2 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-300"
          >
            <div className="space-y-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-300"
              >
                <h3 className="font-serif text-base text-zinc-900 dark:text-white leading-tight flex-1">
                  {item.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              {item.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {item.description.replace(/<[^>]*>/g, "")}
                </p>
              )}
              <div className="flex items-center justify-between gap-2 pt-1">
                <time className="text-xs text-zinc-500 dark:text-zinc-500">
                  {formatDate(item.pubDate)}
                </time>
                {item.author && (
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {item.author}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

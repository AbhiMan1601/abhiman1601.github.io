"use client";

import { useEffect, useMemo, useState } from "react";

interface BlogItem {
  title: string;
  link: string;
  pubDate: string;
}

interface FeedResponse {
  status?: string;
  message?: string;
  items?: BlogItem[];
}

const FUNCTOR_RSS_URL =
  process.env.NEXT_PUBLIC_FUNCTOR_RSS_URL ?? "https://functor.network/user/3197/feed";
const RSS2JSON_URL = "https://api.rss2json.com/v1/api.json";

export function BlogTitles() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = useMemo(() => {
    const params = new URLSearchParams({ rss_url: FUNCTOR_RSS_URL });
    const apiKey = process.env.NEXT_PUBLIC_RSS2JSON_API_KEY;
    if (apiKey) {
      params.set("api_key", apiKey);
      params.set("count", "100");
      params.set("order_by", "pubDate");
      params.set("order_dir", "desc");
    }
    return `${RSS2JSON_URL}?${params.toString()}`;
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadFeed() {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error("The feed service did not respond.");

        const data = (await response.json()) as FeedResponse;
        if (data.status !== "ok" || !Array.isArray(data.items)) {
          throw new Error(data.message || "The feed could not be parsed.");
        }
        const posts = [...data.items].sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
        );
        setBlogs(posts);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "The feed is unavailable.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadFeed();
    return () => controller.abort();
  }, [apiUrl]);

  if (loading) {
    return <p className="feed-state"><span className="status-dot" /> Fetching the latest posts…</p>;
  }

  if (error) {
    return (
      <div className="feed-state feed-error">
        <p>Could not load the live feed. {error}</p>
        <a href="https://functor.network/user/3197/entries" target="_blank" rel="noreferrer">Read on Functor Network →</a>
      </div>
    );
  }

  return (
    <div className="blog-list">
      <p className="blog-order">All posts · newest first</p>
      <ol>
        {blogs.map((post, index) => (
          <li key={post.link}>
            <span className="blog-index">{String(index + 1).padStart(2, "0")}</span>
            <a href={post.link} target="_blank" rel="noreferrer">
              <span>{post.title}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <time dateTime={post.pubDate}>
              {new Date(post.pubDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </li>
        ))}
      </ol>
    </div>
  );
}

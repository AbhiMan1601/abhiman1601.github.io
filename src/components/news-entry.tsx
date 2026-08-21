import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="relative pl-4 py-3 border-l-2 border-zinc-200 dark:border-zinc-800">
      {/* Date badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
          {news.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-base mb-2 text-zinc-900 dark:text-white">
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            {news.title}
            <ArrowUpRight size={16} />
          </a>
        ) : (
          news.title
        )}
      </h3>

      {/* Description */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{news.description}</p>
    </div>
  );
}

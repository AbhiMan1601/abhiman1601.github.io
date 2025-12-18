import { ArrowUpRight, Sparkles } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="group relative pl-4 py-3 border-l-2 border-zinc-200 hover:border-blue-400 transition-colors duration-300">
      {/* Date badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
          {news.date}
        </span>
        {news.date.includes("2025") && news.date.includes("December") && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
            <Sparkles size={10} />
            New
          </span>
        )}
      </div>
      
      {/* Title */}
      <h3 className="font-serif text-base mb-2 text-zinc-900">
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
          >
            {news.title}
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300"
            />
          </a>
        ) : (
          news.title
        )}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-zinc-600 leading-relaxed">{news.description}</p>
    </div>
  );
}

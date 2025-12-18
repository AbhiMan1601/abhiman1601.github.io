import { ExternalLink, FileText } from "lucide-react";
import { Publication } from "@/data/publication";

// Month names for formatting
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

interface CitationEntryProps {
  publication: Publication;
  index: number;
}

export function CitationEntry({ publication, index }: CitationEntryProps) {
  // Format the date string
  const dateStr = publication.month 
    ? `${MONTHS[publication.month - 1]} ${publication.year}`
    : publication.year;

  // Format authors: highlight "Abhimanyu Nag" or "A. Nag" or "A Nag"
  const formatAuthors = (authors: string) => {
    // Split by comma and format each author
    return authors.split(/,\s*/).map((author, idx, arr) => {
      const isMe = author.toLowerCase().includes('abhimanyu nag') || 
                   author.toLowerCase() === 'a. nag' ||
                   author.toLowerCase() === 'a nag';
      
      return (
        <span key={idx}>
          {isMe ? (
            <span className="font-semibold text-zinc-900 dark:text-white">{author.trim()}</span>
          ) : (
            <span className="text-zinc-600 dark:text-zinc-400">{author.trim()}</span>
          )}
          {idx < arr.length - 1 && ', '}
        </span>
      );
    });
  };

  return (
    <div className="group relative pl-8 md:pl-10 py-4 md:py-5 hover:bg-gradient-to-r hover:from-blue-50/50 dark:hover:from-blue-900/20 hover:to-transparent rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-blue-400">
      {/* Citation number */}
      <span className="absolute left-1 md:left-2 top-4 md:top-5 text-xs md:text-sm text-zinc-300 dark:text-zinc-600 group-hover:text-blue-400 font-mono transition-colors duration-300">
        [{index}]
      </span>
      
      <div className="space-y-2">
        {/* Authors */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {formatAuthors(publication.authors)}
        </p>
        
        {/* Title with link */}
        <h3 className="font-serif text-base leading-snug">
          {publication.paperUrl ? (
            <a 
              href={publication.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 link-underline"
            >
              &ldquo;{publication.title}&rdquo;
            </a>
          ) : (
            <span className="text-zinc-900 dark:text-white">&ldquo;{publication.title}&rdquo;</span>
          )}
        </h3>
        
        {/* Venue and Date */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <span className="italic">{publication.conference}</span>
          <span className="mx-2">•</span>
          <span>{dateStr}</span>
        </p>
        
        {/* Links row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Paper link */}
          {publication.paperUrl && (
            <a
              href={publication.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all duration-200"
            >
              <FileText size={12} />
              <span className="font-medium">Paper</span>
            </a>
          )}
          
          {/* Code link */}
          {publication.codeUrl && (
            <a
              href={publication.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all duration-200"
            >
              <ExternalLink size={12} />
              <span className="font-medium">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

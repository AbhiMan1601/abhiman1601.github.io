import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, BookOpen, Quote } from "lucide-react";
import { CitationEntry } from "@/components/citation-entry";
import { publicationData, sortPublicationsByDate } from "@/data/publication";
import { aboutMe } from "@/data/aboutme";
import { ReadingProgress } from "@/components/reading-progress";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Publications",
  description: `Research publications by ${aboutMe.name}`,
};

export default function PublicationsPage() {
  // Sort publications by date (newest first)
  const sortedPublications = sortPublicationsByDate(publicationData);

  // Group publications by year
  const publicationsByYear = sortedPublications.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {} as Record<string, typeof publicationData>);

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Calculate total citations
  const totalCitations = publicationData.reduce((sum, pub) => sum + (pub.citations || 0), 0);

  // Track global index for citation numbering
  let globalIndex = 1;

  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-[#0f0f0f] transition-colors duration-300">
      <ReadingProgress />
      
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#FFFCF8]/80 dark:bg-[#0f0f0f]/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-300"
          >
            <ArrowLeft 
              size={16} 
              className="group-hover:-translate-x-1 transition-transform duration-300" 
            />
            <span>Back to Home</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <BookOpen size={24} className="md:w-7 md:h-7 text-zinc-700 dark:text-zinc-300" />
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-zinc-900 dark:text-white">
              Publications
            </h1>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
            My research publications in market design, stochastic processes, algorithmic game theory, 
            mechanism design, and decentralized finance. See Google Scholar for an upto date list of my publications
          </p>
          
          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 py-4 md:py-6 px-4 md:px-6 bg-gradient-to-r from-zinc-50 to-blue-50/30 dark:from-zinc-900 dark:to-blue-900/20 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif text-zinc-900 dark:text-white">{publicationData.length}</span>
              <span className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Publications</span>
            </div>
            <div className="w-px h-10 md:h-12 bg-zinc-200 dark:bg-zinc-700" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Quote size={14} className="md:w-4 md:h-4 text-blue-500" />
                <span className="text-2xl md:text-3xl font-serif text-zinc-900 dark:text-white">{totalCitations}</span>
              </div>
              <span className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Total Citations</span>
            </div>
            {aboutMe.googleScholarUrl && (
              <a 
                href={aboutMe.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 ml-auto btn-shine"
              >
                <span className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">Google Scholar</span>
                <ExternalLink size={12} className="md:w-3.5 md:h-3.5 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            )}
          </div>
        </div>

        {/* Publications by year - Citation Format */}
        <div className="space-y-12">
          {sortedYears.map((year) => {
            const yearPubs = publicationsByYear[year];
            return (
              <section key={year}>
                {/* Year header */}
                <div className="flex items-center gap-2 md:gap-4 mb-4 sticky top-12 md:top-16 bg-[#FFFCF8] dark:bg-[#0f0f0f] py-2 z-10">
                  <h2 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-3 md:px-4 py-1 rounded-full">
                    {year}
                  </h2>
                  <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-700" />
                  <span className="text-xs md:text-sm text-zinc-400 dark:text-zinc-500">
                    {yearPubs.length} paper{yearPubs.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                {/* Publications list */}
                <div className="divide-y divide-zinc-100">
                  {yearPubs.map((publication) => {
                    const currentIndex = globalIndex++;
                    return (
                      <CitationEntry 
                        key={currentIndex} 
                        publication={publication} 
                        index={currentIndex}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* BibTeX section */}
        {/* <section className="mt-16 p-6 bg-zinc-50 rounded-xl border border-zinc-100">
          <h3 className="font-serif text-lg text-zinc-900 mb-3">Citation Format</h3>
          <p className="text-sm text-zinc-600 mb-4">
            All publications are displayed in academic citation format. Click on any title to access the paper.
          </p>
          <p className="text-sm text-zinc-500 italic">
            Citation data sourced from{" "}
            <a 
              href={aboutMe.googleScholarUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 transition-colors"
            >
              Google Scholar
            </a>
            . Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
          </p>
        </section> */}
      </div>
    </div>
  );
}

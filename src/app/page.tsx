import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { CitationEntry } from "@/components/citation-entry";
import { publicationData, sortPublicationsByDate } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { talksData } from "@/data/talks";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-[#0f0f0f] transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName} id="news">
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-900 dark:text-white">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 dark:text-zinc-300 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  // Show only first 3 publications on home page, sorted by date
                  const sortedPubs = sortPublicationsByDate(publicationData);
                  const featuredPublications = sortedPubs.slice(0, 3);
                  return (
                    <div key={sectionName} className="space-y-24">
                      {publicationData.length > 0 && (
                        <section id="publications">
                          <div className="flex items-center justify-between mb-8">
                            <h2 className="font-serif text-l tracking-wide uppercase text-zinc-900 dark:text-white">
                              Recent Publications
                            </h2>
                            <Link 
                              href="/publications"
                              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                            >
                              <span className="tracking-wider uppercase">View All</span>
                              <ArrowRight 
                                size={12} 
                                className="group-hover:translate-x-1 transition-transform duration-300" 
                              />
                            </Link>
                          </div>
                          <div className="divide-y divide-zinc-100 dark:divide-zinc-800 -mx-2">
                            {featuredPublications.map((publication, index) => (
                              <CitationEntry 
                                key={index} 
                                publication={publication} 
                                index={index + 1}
                              />
                            ))}
                          </div>
                          {publicationData.length > 3 && (
                            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                              <Link 
                                href="/publications"
                                className="group inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                              >
                                <span>See all {publicationData.length} publications</span>
                                <ArrowRight 
                                  size={14} 
                                  className="group-hover:translate-x-1 transition-transform duration-300" 
                                />
                              </Link>
                            </div>
                          )}
                        </section>
                      )}
                      
                      {/* Talks Section */}
                      {talksData.length > 0 && (
                        <section id="talks">
                          <h2 className="font-serif text-l mb-8 tracking-wide uppercase text-zinc-900 dark:text-white">
                            Talks
                          </h2>
                          <div className="space-y-12">
                            {talksData.map((talk, index) => (
                              <div key={index} className="space-y-4">
                                <div className="video-container aspect-video w-full">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${talk.youtubeId}`}
                                    title={talk.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                  />
                                </div>
                                <div className="pt-2">
                                  <h3 className="font-serif text-lg text-zinc-900 dark:text-white mb-1">{talk.title}</h3>
                                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{talk.event} • {talk.date}</p>
                                  {talk.description && (
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{talk.description}</p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} id="experience">
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase text-zinc-900 dark:text-white">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} id="code">
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase text-zinc-900 dark:text-white">
                          Code
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Video,
  Newspaper,
  Briefcase,
  FileText,
  Code,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[55vh] md:w-[85%] aspect-[3/4] profile-image-glow">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3 text-zinc-900 dark:text-white">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 dark:text-zinc-400 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            href="/publications"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <BookOpen size={11} />
            <span className="tracking-wider uppercase font-medium">Publications</span>
          </Link>
          <a
            href="https://functor.network/user/3197/entries"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <FileText size={11} />
            <span className="tracking-wider uppercase font-medium">Blog</span>
          </a>
          <a
            href="#talks"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Video size={11} />
            <span className="tracking-wider uppercase font-medium">Talks</span>
          </a>
          <a
            href="#news"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Newspaper size={11} />
            <span className="tracking-wider uppercase font-medium">News</span>
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Briefcase size={11} />
            <span className="tracking-wider uppercase font-medium">Experience</span>
          </a>
          <a
            href="#code"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Code size={11} />
            <span className="tracking-wider uppercase font-medium">Code</span>
          </a>
        </div>
        
        {/* External Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-2">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} />
            {aboutMe.email}
          </a>
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} />
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} />@{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

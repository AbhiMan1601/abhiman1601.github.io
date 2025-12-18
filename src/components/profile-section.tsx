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
    <div className="md:sticky top-8 flex flex-row-reverse md:flex-col gap-4 md:space-y-4">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[35vh] md:w-[70%] aspect-[4/5] profile-image-glow">
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
        <h1 className="font-serif text-2xl font-light tracking-wide mb-2 text-zinc-900 dark:text-white">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed tracking-wide mb-3">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed tracking-wide uppercase mb-4">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
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
        <div className="flex flex-wrap gap-1.5 mb-4">
          <Link
            href="/publications"
            className="group inline-flex items-center gap-1 px-2.5 py-1 text-[10px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <BookOpen size={10} />
            <span className="tracking-wider uppercase font-medium">Publications</span>
          </Link>
          <a
            href="https://functor.network/user/3197/entries"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 px-2.5 py-1 text-[10px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <FileText size={10} />
            <span className="tracking-wider uppercase font-medium">Blog</span>
          </a>
          <a
            href="#talks"
            className="group inline-flex items-center gap-1 px-2.5 py-1 text-[10px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Video size={10} />
            <span className="tracking-wider uppercase font-medium">Talks</span>
          </a>
          <a
            href="#news"
            className="group inline-flex items-center gap-1 px-2.5 py-1 text-[10px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Newspaper size={10} />
            <span className="tracking-wider uppercase font-medium">News</span>
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-1 px-2.5 py-1 text-[10px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Briefcase size={10} />
            <span className="tracking-wider uppercase font-medium">Experience</span>
          </a>
          <a
            href="#code"
            className="group inline-flex items-center gap-1 px-2.5 py-1 text-[10px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white rounded-full transition-all duration-300"
          >
            <Code size={10} />
            <span className="tracking-wider uppercase font-medium">Code</span>
          </a>
        </div>
        
        {/* Contact & Social - Compact Layout */}
        <div className="space-y-1.5 text-xs">
          <a
            href={`mailto:${aboutMe.email}`}
            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors break-all"
          >
            <Mail size={12} />
            <span className="text-[10px] md:text-xs">{aboutMe.email}</span>
          </a>
          {aboutMe.googleScholarUrl && (
            <a
              href={aboutMe.googleScholarUrl}
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap size={12} />
              Google Scholar
            </a>
          )}
          <div className="flex flex-wrap gap-3 pt-1">
            {aboutMe.twitterUsername && (
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <Twitter size={14} />
              </a>
            )}
            {aboutMe.githubUsername && (
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github size={14} />
              </a>
            )}
            {aboutMe.linkedinUsername && (
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            )}
            {aboutMe.cvUrl && (
              <a
                href={aboutMe.cvUrl}
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="CV"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

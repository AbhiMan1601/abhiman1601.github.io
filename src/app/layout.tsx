import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

function stripTags(input: string): string {
  return input.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

const SITE_CANONICAL_PATH = "/abhiman1601.github.io/";
const SITE_BASE = "https://abhiman1601.github.io";
const siteUrl = `${SITE_BASE}${SITE_CANONICAL_PATH}`;
const rawDescription = customMetadata.description || aboutMe.description || "";
const metaDescription = stripTags(rawDescription).slice(0, 160);
const metaTitle = customMetadata.title || aboutMe.name;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE),
  alternates: {
    canonical: SITE_CANONICAL_PATH,
  },
  title: {
    default: metaTitle,
    template: `%s | ${aboutMe.name}`,
  },
  description: metaDescription,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    aboutMe.name,
    aboutMe.title,
    aboutMe.institution,
    "research",
    "publications",
    "experience",
    "portfolio",
  ].filter(Boolean) as string[],
  authors: [{ name: aboutMe.name }],
  creator: aboutMe.name,
  publisher: aboutMe.institution,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: aboutMe.name,
    title: metaTitle,
    description: metaDescription,
    images: aboutMe.imageUrl
      ? [
          {
            url: aboutMe.imageUrl,
            width: 1200,
            height: 630,
            alt: aboutMe.name,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    creator: aboutMe.twitterUsername
      ? `@${aboutMe.twitterUsername}`
      : undefined,
    site: aboutMe.twitterUsername ? `@${aboutMe.twitterUsername}` : undefined,
    images: aboutMe.imageUrl ? [aboutMe.imageUrl] as string[] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Dark mode initialization script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {(() => {
          const sameAs: string[] = [];
          if (aboutMe.blogUrl) sameAs.push(aboutMe.blogUrl);
          if (aboutMe.googleScholarUrl) sameAs.push(aboutMe.googleScholarUrl);
          if (aboutMe.twitterUsername)
            sameAs.push(`https://twitter.com/${aboutMe.twitterUsername}`);
          if (aboutMe.githubUsername)
            sameAs.push(`https://github.com/${aboutMe.githubUsername}`);
          if (aboutMe.linkedinUsername)
            sameAs.push(`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`);
          const logoUrl = aboutMe.imageUrl || undefined;
          const personLd = {
            "@context": "https://schema.org",
            "@type": "Person",
            name: aboutMe.name,
            alternateName: aboutMe.altName || undefined,
            jobTitle: aboutMe.title,
            affiliation: aboutMe.institution || undefined,
            url: siteUrl,
            image: logoUrl,
            sameAs: sameAs.length > 0 ? sameAs : undefined,
          };
          const orgLd = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: aboutMe.name,
            url: siteUrl,
            logo: logoUrl,
            sameAs: sameAs.length > 0 ? sameAs : undefined,
          };
          const webSiteLd = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: metaTitle,
            url: siteUrl,
            publisher: {
              "@type": "Organization",
              name: aboutMe.name,
              url: siteUrl,
              logo: logoUrl,
            },
          };
          return (
            <>
              <script
                key="ld-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
              />
              <script
                key="ld-org"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
              />
              <script
                key="ld-website"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
              />
            </>
          );
        })()}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8] dark:bg-[#0f0f0f]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Abhimanyu Nag",
  title: "Research and Engineering",
  institution: "University of Alberta",
  // Note that links work in the description
  description:
    "<div style=\"border: 2px solid #1f2937; padding: 1.5rem; border-radius: 0.75rem; background: linear-gradient(135deg, rgba(31, 41, 55, 0.08) 0%, rgba(55, 65, 81, 0.04) 100%); margin-bottom: 1.5rem;\" class=\"dark:border-[#d1d5db] dark:bg-gradient-to-br dark:from-[rgba(209,213,219,0.12)] dark:to-[rgba(209,213,219,0.04)]\"><strong style=\"font-size: 1.05em; line-height: 1.6;\" class=\"text-gray-900 dark:text-gray-200\"> I will go on a career sabbatical for family and health from July 2026 onwards. Will resume next year.</strong></div>" +
    "<br>" +
    "I have been a <strong>MITACS Fellow</strong> working with Dr. Michael Kouritzin at the <strong>Department of Mathematical and Statistical Sciences, University of Alberta</strong> to develop innovative technology for <strong>Muchlearning</strong> where I served concurrently as <strong>Engineering Manager</strong> since February 2026. I was also an advising <strong>Quantitative Research Scientist</strong> at <strong>Catalysis Labs</strong> to develop pricing algorithms for DeFi insurance." +
    "<br><br>" + 
    "Previously, I used to work in the industry in Financial Risk Management, particularly in Decentralized Finance (DeFi). I started my career at <strong>Nethermind</strong> as a Data Scientist and most recently I served as <strong>Chief Scientist at Chainrisk Labs (Antler-backed)</strong>, where I led research and advised our clients on DeFi risk parameters, formal verification of DeFi protocols and economic attack prevention. Before coming back to UAlberta, I also had a brief stint at <strong>Pantera Capital's hedge fund TanX</strong> as Lead Risk Simulations where I was leading the development of quantitative risk models for trading decisions." +
    "<br><br>" + 
    "My industry research has focused on <em>risk modelling</em>, <em>algorithmic game theory</em>, and <em>economic security</em> in decentralized systems. My current work is in modelling Sybil attacks in competitive markets (see <a href=\"https://arxiv.org/abs/2512.10203\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-white transition-colors\">recent paper</a>) and analyzing security properties of decentralized protocols, with a particular interest in consensus engineering and secure market design in blockchain transaction fee mechanisms, governance systems, and multi-agent coordination problems in AI." +
    "<br><br>" +
    "See my <a href=\"https://scholar.google.ca/citations?user=Nn1QQiUAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-white transition-colors\">Google Scholar</a> for my research publications and my <a href=\"https://functor.network/user/3197/entries\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-white transition-colors\">blog</a> for some of my more informal perspectives related to my work.",
  email: "abhi[dot]nag1601[at]gmail[dot]com",
  imageUrl:"https://i.ibb.co/XfM09fxY/Linked-In-Headshot.jpg",
  // "https://i.ibb.co/RGG1gyHT/unnamed.jpg", 
  googleScholarUrl: "https://scholar.google.ca/citations?user=Nn1QQiUAAAAJ&hl=en",
  githubUsername: "AbhiMan1601",
  linkedinUsername: "abhimanyu-nag-682747201",
  twitterUsername: "AbhiMan1601",
  blogUrl: "https://functor.network/user/3197/entries",
  // cvUrl: "https://",
  institutionUrl: "https://www.ualberta.ca",
  // altName: "",
  funDescription: "Risk Management •  Algorithmic Game Theory • Market Design • Economics of Security • Decentralized Finance (DeFi) • Blockchain • AI Safety",
};

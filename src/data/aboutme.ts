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
  title: "MITACS Fellow",
  institution: "University of Alberta",
  // Note that links work in the description
  description:
    "I am currently a <strong>MITACS Fellow</strong> working with Dr. Michael Kouritzin at the <strong>Department of Mathematical and Statistical Sciences, University of Alberta</strong> to develop innovative technology for educational platforms. I am also an advising <strong>Quantitative Research Scientist</strong> at <strong>Catalysis Labs</strong> to develop pricing algorithms for DeFi insurance." +
    "<br><br>" +
    "Previously, I used to work in the industry in Financial Risk Management, particularly in Decentralized Finance (DeFi). I started my career at <strong>Nethermind</strong> as a Data Scientist and most recently I served as <strong>Chief Scientist at Chainrisk Labs (Antler-backed)</strong>, where I led research and advised our clients on DeFi risk parameters, formal verification of DeFi protocols and economic attack prevention. Before coming back to UAlberta, I also had a brief stint at <strong>Pantera Capital's hedge fund TanX</strong> as Lead Risk Simulations where I was leading the development of quantitative risk models for trading decisions." +
    "<br><br>" +
    "My industry research has focused on <em>risk modelling</em>, <em>algorithmic game theory</em>, and <em>economic security</em> in decentralized systems. My current work is in modelling Sybil attacks in competitive markets (see <a href=\"https://arxiv.org/abs/2512.10203\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-white transition-colors\">recent paper</a>) and analyzing security properties of decentralized protocols, with a particular interest in secure market design in blockchain transaction fee mechanisms, governance systems, and multi-agent coordination problems in AI." +
    "<br><br>" +
    "See my <a href=\"https://scholar.google.ca/citations?user=Nn1QQiUAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-white transition-colors\">Google Scholar</a> for my research publications and my <a href=\"https://functor.network/user/3197/entries\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-white transition-colors\">blog</a> for some of my more informal perspectives related to my work.",
  email: "nag1[at]ualberta[dot]ca",
  imageUrl:"https://i.ibb.co/Tqg8N6y1/Headshot.jpg",
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

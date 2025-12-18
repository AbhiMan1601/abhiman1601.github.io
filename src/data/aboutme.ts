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
    "I am a MITACS Research Fellow working with Dr. Michael Kouritzin at the Department of Mathematical and Statistical Sciences, University of Alberta. My research focuses on <strong>mechanism design</strong>, <strong> algorithmic game theory</strong>, and <strong>economic security</strong> in decentralized systems." +
    "<br><br>" +
    "Previously, I served as Chief Scientist at Chainrisk Labs (Antler-backed), where I led research on formal verification of DeFi protocols and economic attack prevention. I also worked as Lead Risk Simulations at TanX (Pantera Capital), developing quantitative risk models for trading infrastructure." +
    "<br><br>" +
    "My current work applies stochastic processes and game-theoretic methods to analyze security properties of blockchain protocols, with a particular interest in restaking mechanisms, governance systems, and multi-agent coordination problems including AI.",
  email: "nag1[at]ualberta[dot]ca",
  imageUrl:"https://i.ibb.co/RGG1gyHT/unnamed.jpg",
  googleScholarUrl: "https://scholar.google.ca/citations?user=Nn1QQiUAAAAJ&hl=en",
  githubUsername: "AbhiMan1601",
  linkedinUsername: "abhimanyu-nag-682747201",
  twitterUsername: "AbhiMan1601",
  blogUrl: "https://functor.network/user/3197/entries",
  // cvUrl: "https://",
  institutionUrl: "https://www.ualberta.ca",
  // altName: "",
  funDescription: "Security and Risk Management • Stochastic Processes • Dynamical Systems • Algorithmic Game Theory • Mechanism Design • Information Economics • Contract Theory • Differential Privacy • Economics of Security",
};

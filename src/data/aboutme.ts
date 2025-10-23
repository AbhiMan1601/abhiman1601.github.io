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
    "I'm a MITACS Fellow under Dr. Michael Kouritzin at the Department of Mathematical and Statistical Sciences, University of Alberta, Canada. I was Chief Scientist at Antler-backed Chainrisk Labs back in the old days where I was leading innovation in preventing economic exploits and attacks in decentralized markets. After that I joined Pantera Capital's Hedge Fund TanX as Lead Risk Simulations to help traders make better decisions on the floor.",
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

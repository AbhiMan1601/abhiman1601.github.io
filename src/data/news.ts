export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "February 2026",
    title: "My book chapter in Mathematical Research in Blockchain Economy (MARBLE) 2025 is out now!",
    description: "\"Economic Security of Multiple Shared Security Protocols\" has been published in the proceedings of MARBLE 2025 which has been published by Springer Nature. The full chapter can be accessed by clicking on the banner!",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-13377-9_8",
  },
  {
    date: "December 2025",
    title: "Paper Accepted to Financial Cryptography 2026, St. Kitts and Nevis",
    description: "\"On Sybil Proofness in Competitive Combinatorial Exchanges\" has been accepted as a poster at Financial Cryptography and Data Security 2025. I will be presenting this work in St. Kitts and Nevis in March 2026!",
    link: "https://arxiv.org/abs/2512.10203",
  },
  {
    date: "August 2025",
    title: "Why Consensus Insurance Markets Are a Disaster Waiting to Happen",
    description: "Published analysis revealing how attackers can weaponize insurance policies to slash their attack costs to near-zero while maximizing system-wide damage. Introduced the kamikaze attack model and proved fundamental impossibility results for naive insurance designs. Special thanks to collaborators from Stanford, Columbia, University of Toronto, and Othentic for their insights.",
    link: "https://functor.network/user/3197/entry/1304",
  },
];

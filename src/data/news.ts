export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "March 2026",
    title: "Paper Accepted to IEEE International Conference on Blockchain and Cryptocurrency (ICBC) 2026, sponsored by the IEEE Communications Society",
    description: "Our SoK paper \"Speedy Secure Finality\" has been accepted to ICBC 2026! This paper provides a comprehensive analysis of the security and performance tradeoffs of various finality mechanisms in blockchain protocols. Looking forward to presenting this work at ICBC 2026 in Brisbane, Australia!",
    link: "https://arxiv.org/abs/2512.20715",
  },
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
  }
];

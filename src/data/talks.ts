export interface Talk {
  title: string;
  event: string;
  date: string;
  youtubeId: string;
  description?: string;
}

export const talksData: Talk[] = [
  {
    title: "MAIDs for Governance Protocols",
    event: "ETH Tokyo and Coinfest Bali",
    date: "2024",
    youtubeId: "0g4Mi7KTWUI",
    description: "I explain how Multi-Agent Influence Diagrams (MAIDs) can be used to formally verify governance protocols at ETH Tokyo 2024 ",
  },
  {
    title: "Security and Mechanism Design in DeAI",
    event: "Proposal Talk at Yale",
    date: "2025",
    youtubeId: "CE_lDfdqRPY",
    description: "First iteration research proposal talk on \"Security and Mechanism Design in DeAI\" by me at Yale University in 2025.",
  },
];


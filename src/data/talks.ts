export interface Talk {
  title: string;
  event: string;
  date: string;
  youtubeId: string;
  startSeconds?: number;
  description?: string;
}

export const talksData: Talk[] = [
  {
    title: "Sybil Attacks on Inclusion List Mechanisms: FOCIL and AUCIL",
    event: "Devcon 8, Mumbai",
    date: "2026",
    youtubeId: "YYjoPaWMjNU",
    description: "A short talk on whether Ethereum inclusion-list mechanisms can be made inherently Sybil-proof.",
  },
  {
    title: "How to Model Cryptoeconomic Attacks and Adversaries in DeFi",
    event: "DeFi Security Summit, Mumbai",
    date: "2026",
    youtubeId: "rb6Zo7qIaM8",
    startSeconds: 15597,
    description: "A practical framework for modelling adversarial economic behavior and attacks in DeFi protocols.",
  },
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



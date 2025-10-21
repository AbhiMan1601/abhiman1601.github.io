export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "July 2025 - Present",
    title: "MITACS Fellow",
    company: "University of Alberta",
    description:
      "Research in Mathematical Statistics for Financial Markets and Education Parameter Estimation under Dr. Michael Kouritzin at the Department of Mathematical and Statistical Sciences.",
    advisor: "Dr. Michael Kouritzin",
    companyUrl: "https://www.ualberta.ca",
  },
  {
    date: "2025",
    title: "Risk Management Lead",
    company: "Pantera Capital's TanX, YODL Exchange",
    description:
      "Led risk simulation strategies for Pantera Capital's Hedge Fund TanX and devised CoW order routing algorithm for Dextr (now YODL) Exchange, helping traders make better decisions on the floor."
  },
  {
    date: "2023 - 2025",
    title: "Chief Scientist",
    company: "Chainrisk Labs",
    description:
      "Led innovation in preventing economic exploits and attacks in decentralized markets at this Antler-backed startup. Developed governance attack prediction on Compound Finance using Multi-Agent Influence Diagrams (presented at ETH Tokyo & Coinfest Bali).",
    companyUrl: "https://chainrisk.io",
  },
  {
    date: "2022-2023",
    title: "Protocol Economist",
    company: "HyperspaceAI",
    description:
      "Worked on incentive design on EigenLayer and optimal transaction dissemination protocols at this supercomputing L1 turned Distributed AI company."
  },
  {
    date: "2022",
    title: "Junior Data Scientist",
    company: "Nethermind",
    description:
      "Got cited in the Ethereum Yellow Paper (EIP-5133) for accurately predicting ETH's difficulty bomb delay. Conducted stress tests for TwinStake and MEV modeling with MEV-Boost.",
    companyUrl: "https://nethermind.io",
  },
];

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
    date: "July 2025—Present",
    title: "MITACS Fellow / Engineering Manager",
    company: "University of Alberta / MuchLearning",
    description:
      "Transitioned to Engineering Manager role at Muchlearning. Led a team of engineers and oversaw the development and production of our Learning Management System using industry tools such as node.js for development, CICD best practices for production pipelines, AWS tools for database management and infrastructure tooling.",
    companyUrl: "muchlearning.org",
  },
  {
    date: "January 2025—July 2026",
    title: "Part-time Research Scientist",
    company: "Catalysis Labs",
    description:
      "Developed insurance coverage and premium algorithms for DeFi vaults using actuarial risk loading, stochastic simulation, and quantitative risk management. Co-developed an economic-security model for multiple restaking architectures published at MARBLE 2025.",
  },
  {
    date: "March 2025—July 2025",
    title: "Simulation Engineer",
    company: "Pantera Capital's TanX",
    description:
      "Evaluated digital-asset trading strategies using the Kelly criterion, risk-of-ruin analysis, portfolio hedging, and large-scale stochastic and quasi-Monte Carlo simulation."
  },
  {
    date: "December 2023—December 2024",
    title: "Chief Scientist",
    company: "Chainrisk Labs",
    description:
      "Led innovation in preventing economic exploits and attacks in decentralized markets at this Antler-backed startup. Developed governance attack prediction on Compound Finance using Multi-Agent Influence Diagrams (presented at ETH Tokyo & Coinfest Bali).",
    companyUrl: "https://chainrisk.xyz",
  },
  {
    date: "September 2022—August 2023",
    title: "Protocol Economics Researcher",
    company: "Hyperspace Protocol",
    description:
      "Worked on incentive design on EigenLayer and optimal transaction dissemination protocols at this supercomputing L1 turned Distributed AI company."
  },
  {
    date: "May 2022—September 2022",
    title: "Junior Data Scientist",
    company: "Nethermind",
    description:
      "Got cited in the Ethereum Yellow Paper (EIP-5133) for accurately predicting ETH's difficulty bomb delay. Conducted stress tests for TwinStake and MEV modeling with MEV-Boost.",
    companyUrl: "https://nethermind.io",
  },
];

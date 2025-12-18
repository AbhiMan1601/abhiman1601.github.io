export interface Publication {
  year: string;
  month?: number; // 1-12 for sorting purposes
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  citations?: number;
}

// Helper function to sort publications by date (newest first)
export function sortPublicationsByDate(publications: Publication[]): Publication[] {
  return [...publications].sort((a, b) => {
    const yearDiff = parseInt(b.year) - parseInt(a.year);
    if (yearDiff !== 0) return yearDiff;
    // If same year, sort by month (newer months first)
    const monthA = a.month || 6; // Default to June
    const monthB = b.month || 6;
    return monthB - monthA;
  });
}

// Helper function to format citation in academic style
export function formatCitation(pub: Publication): string {
  const authors = pub.authors;
  const title = pub.title;
  const venue = pub.conference;
  const year = pub.year;
  
  return `${authors}. "${title}." ${venue}, ${year}.`;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    month: 7,
    conference: "arXiv Preprint",
    title: "A Coincidence of Wants Mechanism for Swap Trade Execution in Decentralized Exchanges",
    authors: "Abhimanyu Nag, Madhur Prabhakar, Tanuj Behl",
    paperUrl: "https://arxiv.org/abs/2507.10149",
  },
  {
    year: "2025",
    month: 12,
    conference: "Financial Cryptography and Data Security (FC) 2025",
    title: "On Sybil Proofness in Competitive Combinatorial Exchange",
    authors: "Abhimanyu Nag",
    paperUrl: "https://arxiv.org/abs/2512.10203",
    award: "Poster Presentation",
  },
  {
    year: "2025",
    month: 5,
    conference: "Mathematical Research in Blockchain Economy (MARBLE)",
    title: "Economic Security of Multiple Shared Security Protocols",
    authors: "Abhimanyu Nag, Dhruv Bodani, Abhishek Kumar",
    paperUrl: "https://arxiv.org/abs/2505.03843",
    citations: 3,
    award: "Seminal work in multiple restaking security protocols",
  },
  {
    year: "2025",
    month: 3,
    conference: "arXiv Preprint",
    title: "On-Chain Credit Risk Score in Decentralized Finance",
    authors: "Rik Ghosh, Arka Datta, Vidhi Aggarwal, Sudipan Sinha, Abhimanyu Nag",
    paperUrl: "https://arxiv.org/",
    citations: 1,
  },
  {
    year: "2025",
    month: 1,
    conference: "Bachelor's Thesis at University of Alberta",
    title: "Detecting Healthcare Insurance Fraud Using Markov Observation Model",
    authors: "Michael D. Gyimah, Abhimanyu Nag",
    paperUrl: "https://ualberta.scholaris.ca/items/5548748e-53b5-4cf1-9bba-c2a77486a45e",
  },
  {
    year: "2025",
    month: 2,
    conference: "AI in Finance workshop, ECAI 2025",
    title: "Multi Agent Influence Diagrams for DeFi Governance",
    authors: "Abhimanyu Nag, Samrat Gupta, Sudipan Sinha, Arka Datta",
    paperUrl: "https://arxiv.org/abs/2402.15037",
    citations: 2,
  },
  {
    year: "2024",
    month: 10,
    conference: "arXiv Preprint",
    title: "Compound V3 Economic Audit Report",
    authors: "Rik Ghosh, Samrat Gupta, Arka Datta, Abhimanyu Nag, Sudipan Sinha",
    paperUrl: "https://arxiv.org/abs/2410.04085",
  },
  {
    year: "2024",
    month: 2,
    conference: "CoRR",
    title: "Analyzing Games in Maker Protocol Part One: A Multi-Agent Influence Diagram Approach Towards Coordination",
    authors: "Abhimanyu Nag, Samrat Gupta, Sudipan Sinha, Arka Datta",
    paperUrl: "https://arxiv.org/abs/2402.15037",
    citations: 1,
  },
  {
    year: "2022",
    month: 6,
    conference: "Ethereum Yellow Paper",
    title: "Ethereum Improvement Proposal 5133",
    authors: "Tomasz Stanczak, Eric Marti Haynes, Josh Klopfenstein, Abhimanyu Nag",
    paperUrl: "https://eips.ethereum.org/EIPS/eip-5133",
    award: "Cited in Ethereum Yellow Paper",
  },
];

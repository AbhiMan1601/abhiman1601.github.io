export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
      year: "2025",
      conference: "New Preprint",
      title: "A Coincidence of Wants Mechanism for Swap Trade Execution in Decentralized Exchanges",
      authors: "Abhimanyu Nag, Madhur Prabhakar, Tanuj Behl",
      paperUrl: "https://arxiv.org/abs/2507.10149",
      tldr: "We propose a mathematically rigorous framework for identifying and completing Coincidence of Wants (CoW) cycles in decentralized exchange (DEX) aggregators. Unlike existing auction based systems such as CoWSwap, our approach introduces an asset matrix formulation that not only verifies feasibility using oracle prices and formal conservation laws but also completes partial CoW cycles of swap orders that are discovered using graph traversal and are settled using imbalance correction. We define bridging orders and show that the resulting execution is slippage free and capital preserving for LPs. Applied to real world Arbitrum swap data, our algorithm demonstrates efficient discovery of CoW cycles and supports the insertion of synthetic orders for atomic cycle closure. This work can be thought of as the detailing of a potential delta-neutral strategy by liquidity providing market makers: a structured CoW cycle execution.",
    },
  {
    year: "2025",
    conference: "Mathematical Research in Blockchain Economy (MARBLE)",
    title: "Economic Security of Multiple Shared Security Protocols",
    authors: "Abhimanyu Nag, Dhruv Bodani, Abhishek Kumar",
    paperUrl: "https://arxiv.org/abs/2505.03843",
    tldr: "As restaking protocols gain adoption across blockchain ecosystems, there is a need for Actively Validated Services (AVSs) to span multiple Shared Security Providers (SSPs). This leads to stake fragmentation which introduces new complications where an adversary may compromise an AVS by targeting its weakest SSP. In this paper, we formalize the Multiple SSP Problem and analyze two architectures : an isolated fragmented model called Model M and a shared unified model called Model S, through a convex optimization and game-theoretic lens. We derive utility bounds, attack cost conditions, and market equilibrium that describes protocol security for both models. Our results show that while Model M offers deployment flexibility, it inherits lowest-cost attack vulnerabilities, whereas Model S achieves tighter security guarantees through single validator sets and aggregated slashing logic. We conclude with future directions of work including an incentive-compatible stake rebalancing allocation in restaking ecosystems.",
    award: "Seminal work in multiple restaking security protocols",
  },
  // {
  //   year: "2025",
  //   conference: "arXiv Preprint",
  //   title: "A Coincidence of Wants Mechanism for Swap Trade Execution in Decentralized Exchanges",
  //   authors: "Abhimanyu Nag",
  //   paperUrl: "https://arxiv.org/abs/2507.10149",
  //   tldr: "Novel mechanism design for efficient swap trade execution in DEXs using coincidence of wants principles.",
  // },
  {
    year: "2025",
    conference: "Accepted to AI in Finance workshop, European Conference on Artificial Intelligence (ECAI)",
    title: "Multi Agent Influence Diagrams for DeFi Governance",
    authors: "Abhimanyu Nag, Samrat Gupta, Sudipan Sinha, Arka Datta",
    paperUrl: "https://arxiv.org/abs/2402.15037",
    tldr: "Decentralized Finance (DeFi) governance models have become increasingly complex due to the involvement of numerous independent agents, each with their own incentives and strategies. To effectively analyze these systems, we propose using Multi Agent Influence Diagrams (MAIDs) as a powerful tool for modeling and studying the strategic interactions within DeFi governance. MAIDs allow for a comprehensive representation of the decision-making processes of various agents, capturing the influence of their actions on one another and on the overall governance outcomes. In this paper, we study a simple governance game that approximates real governance protocols and compute the Nash equilibria using MAIDs. We further outline the structure of a MAID in MakerDAO.",
    // award: "Seminal work in multi-agent influence diagrams for governance protocol analysis",

  },
  {
    year: "2022",
    conference: "Ethereum Yellow Paper",
    title: "Ethereum Improvement Proposal 5133",
    authors: "Tomasz Stanczak, Eric Marti Haynes, Josh Klopfenstein, Abhimanyu Nag",
    paperUrl: "https://eips.ethereum.org/EIPS/eip-5133",
    tldr: "Accurately predicted ETH's difficulty bomb delay, cited in the Ethereum Yellow Paper.",
    award: "Cited in Ethereum Yellow Paper",
  },
];

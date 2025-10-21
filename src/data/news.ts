export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "November 2025",
    title: "Talk at DeFi Security Summit, Buenos Aires, Argentina",
    description: "Even small market search frictions can create monopoly power and enable insurance-driven attack vectors in DeFi. Will speak at DSS about how Diamond's Paradox and coverage markets introduce systemic risks, with Lido as a case study.",
  },
  {
    date: "October 2025",
    title: "Open-Sourced Attack Simulation Toolkit for Ethereum PoS",
    description: "Released simulation framework demonstrating unattributable faults (UF) in Ethereum's Proof-of-Stake consensus, attacks where everyone loses stake but no one can be blamed. The toolkit proves why traditional insurance mechanisms catastrophically fail under perfectly correlated losses. Full cryptoeconomic models included.",
    link: "https://github.com/AbhiMan1601/attack_insurance",
  },
  {
    date: "August 2025",
    title: "Big No No: Why Consensus Insurance Markets Are a Disaster Waiting to Happen",
    description: "Published analysis revealing how attackers can weaponize insurance policies to slash their attack costs to near-zero while maximizing system-wide damage. Introduced the kamikaze attack model and proved fundamental impossibility results for naive insurance designs. Special thanks to collaborators from Stanford, Columbia, University of Toronto, and Othentic for their insights.",
    link: "https://functor.network/user/3197/entry/1304",
  },
];

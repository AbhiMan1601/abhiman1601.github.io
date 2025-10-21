export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "EIP-5133 Ethereum Difficulty Bomb Prediction",
    description:
      "Code to predict block time after difficulty bomb was set off. This work was cited in the Ethereum Yellow Paper (EIP-5133) for accurately predicting ETH's difficulty bomb delay.",
    technologies: ["Jupyter Notebook", "Time Series Analysis", "Ethereum PoW"],
    codeUrl: "https://github.com/AbhiMan1601/EIP-5133-Nethermind",
  },
  {
    title: "Attack Insurance Protocol Simulation",
    description:
      "Simulation toolkit for analyzing unattributable faults (UF) in Ethereum PoS consensus and why naive insurance markets fail. Advanced security analysis for proof-of-stake protocols.",
    technologies: ["cadCAD", "Ethereum PoS", "Network Analysis"],
    codeUrl: "https://github.com/AbhiMan1601/attack_insurance",
  },
  {
    title: "Healthcare Insurance Fraud Detection Using Markov Models",
    description:
      "Undergraduate thesis (STAT-499) on predicting healthcare insurance fraud using Markov Observation Models. ScotiaBank-funded research project with Dr. Mike Kouritzin.",
    technologies: ["Statistics", "Markov Models", "JULIA", "Python"],
    codeUrl: "https://github.com/AbhiMan1601/STAT-499-Undergraduate-Thesis",
  },
  // {
  //   title: "Network Data Analytics in Ethereum",
  //   description:
  //     "Research presented at the Festival of Undergraduate Research and Creative Activities (FURCA) 2023 Conference. Network-level analysis of Ethereum blockchain data.",
  //   technologies: ["Jupyter Notebook", "Network Analysis", "Ethereum"],
  //   codeUrl: "https://github.com/AbhiMan1601/FURCA2023---Network-Data-Analytics-in-Ethereum",
  // },
  {
    title: "Statistical Models of Trading Strategies",
    description:
      "A collection of statistical models for various trading strategies. Quantitative analysis frameworks for financial markets.",
    technologies: ["Jupyter Notebook", "Statistics", "Copula Models"],
    codeUrl: "https://github.com/AbhiMan1601/Statistical-Models-of-Trading-Strategies",
  },
  {
    title: "Citadel APAC 2022 Data Open Competition",
    description:
      "Competition work for The Spring 2022 APAC Data Open conducted by Citadel and Correlation One.",
    technologies: ["Python", "R", "Feature Engineering"],
    codeUrl: "https://github.com/AbhiMan1601/Citadel-APAC2022-Data-Open-",
  },
];

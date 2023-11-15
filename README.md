<h1>EIGENLAYER FELLOWSHIP : Open Source Project</h1>

Hello, my name is Abhimanyu Nag and I am a Statistics undergrad at the University of Alberta, Canada. As part of my application to the EigenLayer Research Fellowship, I have created this (less than professional) website to talk about my work. Typos are probably intentional, Mistakes are not - So I would love a dm if you find something to be wrong/weird or if you would like to connect for anything. I used to work at the Ethereum giant, Nethermind as a Data Analyst and was one of the co-authors of the <a href = "https://eips.ethereum.org/EIPS/eip-5133">Ethereum Improvement Proposal 5133</a>, which got me cited in the <a href = "https://ethereum.github.io/yellowpaper/paper.pdf">Ethereum Yellow Paper</a> at 20. I've also had the pleasure to work at HyperspaceAI where the folks are working on the next revolution in decenteralized LLMs. I have made a habit of pivoting and so you can find more about me on <a href = "https://www.linkedin.com/in/abhimanyu-nag-682747201">LinkedIn</a> and <a href = "https://twitter.com/AbhiMan1601">Twitter</a>.

My work in this project and in general, will be based on Cryptoeconomic Security, which EigenLayer defines as "A security model that uses economic incentives and cryptography to ensure the proper functioning and security of a network"

<h2>IDEA 1 : Quantifying the Economic Relationship Between an AVS and EigenLayer with a Currency Exchange Mechanism</h2>
There is a huge scope of innovation on EigenLayer as a source of economic trust between Actively Validated Services (AVS) 
and the Ethereum Protocol. While there is an implicit mechanism of economic trust on the respective AVS, 
I believe that there is a need to establish a quantifiable metric of economic interoperability between the AVS and EigenLayer. 
In this spirit, I propose to create a real-time currency exchange rate between the native token of the respective AVS and Ethereum on EigenLayer. This exchange rate service will enable users to seamlessly convert the native AVS token to Ethereum or
vice versa, providing liquidity and interoperability between the two. The project will explore the dual and multi quorum models of EigenLayer and should provide an analysis of the economic safety considerations needed. I will talk a lot more about it on this site once I work on it more. 

<h2>IDEA 2 : Threshold Cryptography and Fully Holomorphic Encryption</h2>
This is another wonderful idea which is part of the 15 core ideas of innovation on EigenLayer as part of their  <a href="https://www.blog.eigenlayer.xyz/eigenlayer-universe-15-unicorn-ideas/">Blog Post</a>.
As EigenLayer mentions in their blog, "The core idea behind threshold cryptography is that, given an encrypted message, at least k out of n signers can efficiently decrypt the message. In contrast, anything less than k is unable to do so." Given the wonderful power of decentralized trust as provided by EigenLayer, I see this idea having applications in tons of fields like decentralized AI, especially after incorporating FHE. I'm excited to try and build this and I will again talk more about it once I figure it out more. 


<h2>TIMELINE</h2>
<b>Study Time : Day 1 to Day 4</b><i>(I am here right now)</i>

<b>Buidl Time : Day 4 to Day 9</b>

<b>Push commit : Day 9 and Day 10</b>


<h1>Dual Staking Model and Currency Exchange Mechanism</h1>

Many thanks to Token Physicist, Kydo and Soubhik Deb for all their help. 

The Dual Staking Model, as defined by EigenLayer, is basically "using two tokens to secure the same PoS network". The way by which they say that we can go about it is by the following methods :
1. Modular Dual Staking : Where the quorum of the native stakers and ETH restakers has to meet seperately and independently for a valid response.

2. Native Dual Staking : Where the collection of both the native stakers and ETH restakers acts as a single set of validators and their respective stakes are converted into a common denominator based on some external price feed (This is where this project comes in).

3. There is also a Veto Dual Staking, which has differences in basically what the tasks of the restakers are.

My research has led me to look into the common denominator that EigenLayer talks about as a way to convert the stakes (to instill a single quorum of validators). The exchange mechanism can be the common denominator and I claim that it needs to be a lot less volatile than the underlying price of the AVS and ETH. I claim the exchange rate mechanism to be 
$$\text{Value of stake in AVS} = \frac{\text{Cost of Corruption of AVS}}{\text{Cost of Corruption of ETH}} \cdot \text{Value of stake in ETH}$$

The above mechanism gives a direct exchange rate between AVS token value in terms of ETH using the Cost of Corruption as the less volatile metric. Quantifying Cost of Corruption if done using Total Value Locked, as rightly pointed out during my discussions with the team members of EigenLayer, takes the price of the token in consideration and so more research is neccessary. 

The architecture is fairly straightforward with an oracle taking in external feeds and a smart contract to implement the exchange. There is more research needed for correctness of the formula. 


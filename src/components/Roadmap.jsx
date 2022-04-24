import React from "react";
import "./Roadmap.css";
import line from './line.png'

function Roadmap() {



  return (
    <div className="maien" id="rodmpp" >

      <div class="outer">

      <h1>Roadmap</h1>
        <div class="flex-container" id="flex-container">
          <div class="card">

          <img loading="lazy" src={line} alt="" />
          <ul>
                <p>Phase 1</p>
                <li>Idea</li>
                <li>Research</li>
                <li>Team forming</li>
                <li>Website launched</li>
                <li>Social media setup</li>
              </ul>
              <img loading="lazy" src={line} alt="" />

             
          </div>
          <div class="card">
          <img loading="lazy" src={line} alt="" />
          
           <ul>
                <p>Phase 2</p>
                <li>Create NFT's</li>
                <li>NFT's List On Opensea Plateform</li>
                <li>Airdrop NFT's for early users</li>
                <li> Public NFT minting On Opensea</li>
                <li> Snapshot (Early Nft Holder's)</li>
              </ul>
          <img loading="lazy" src={line} alt="" />
             
              </div>
          <div class="card">
          <img loading="lazy" src={line} alt="" />
          
           <ul>
                <p>Phase 3</p>
                <li>Create NFT's</li>
                <li>NFT's List On Opensea Plateform</li>
                <li>Airdrop NFT's for early users</li>
                <li> Public NFT minting On Opensea</li>
                <li> Snapshot (Early Nft Holder's)</li>
              </ul>
              
          <img loading="lazy" src={line} alt="" />
              
              </div>
          <div class="card"> 
          <img loading="lazy" src={line} alt="" />
          
          
          <ul>
                <p>Phase 4</p>
                <li>Create NFT's</li>
                <li>NFT's List On Opensea Plateform</li>
                <li>Airdrop NFT's for early users</li>
                <li> Public NFT minting On Opensea</li>
                <li> Snapshot (Early Nft Holder's)</li>
              </ul>
          <img loading="lazy" src={line} alt="" />
              
              </div>
          <div class="card"> 
          
          <img loading="lazy" src={line} alt="" />
          
          <ul>
                <p>Phase 5</p>
                <li>Create NFT's</li>
                <li>NFT's List On Opensea Plateform</li>
                <li>Airdrop NFT's for early users</li>
                <li> Public NFT minting On Opensea</li>
                <li> Snapshot (Early Nft Holder's)</li>
              </ul>
              
          <img loading="lazy" src={line} alt="" />
              
              </div>
        </div>
      </div>
      {/* <button onclick={clickLeft()}>left</button> */}
      {/* <button onclick={clickRight()}>right</button> */}
      
    </div>
  );
}

export default Roadmap

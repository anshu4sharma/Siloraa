import React from "react";
import "./Roadmap.css";
import line from "./line.png";

import {FaRegHandPointLeft} from 'react-icons/fa'
import {FaHandPointRight} from 'react-icons/fa'
function Roadmap() {
  const slideLeft = () => {
    let slider = document.getElementById('card1')
    slider.scrollLeft = slider.scrollLeft -100 ;


    console.log("hello1")
  };

  const slideRight = () => {
    let slider = document.getElementById('card1')
    slider.scrollLeft = slider.scrollLeft + 100 ;
    
    console.log("hello2")
  };




  return (
    <div className="maien" id="rodmpp">
     
      
      <div  class="outer">
  

  <FaRegHandPointLeft style={{ margin:10, color:"white",width: 30, height: 30 }} onClick={slideLeft}>
        
        </FaRegHandPointLeft> <h1 id="rdmptext" >Roadmap</h1>
        <FaHandPointRight style={{margin:10, color:"white", width: 30, height: 30 }} onClick={slideRight}>
         
        </FaHandPointRight>
  
      
       
     
        <div   class="flex-container" id="card1">
          <div class="card"  >
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
    </div>
  );
}

export default Roadmap;

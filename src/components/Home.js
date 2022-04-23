import React  from "react";
import "./Home.css";
import bnb from "../components/bnb.png";
import Community from "./Community";
import Partners from "./Partners";
import Navbar from "./Navbar";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="home">
          <h1> UPCOMING INNOVATIVE DEFI & NFT GAMING PLATFORM</h1>

          <div className="btn_section">
            <div className="read_doc">
              <a href="#">
              
                <h4>WHITEPAPER</h4>
              </a>
            </div>
          </div>
        </div>

        <div className="home2">
          <img src={bnb} alt="bnb" id="bnb" />
        </div>
      </div>

      <div className="NFT">
       

        <Roadmap  />
      </div>

      <Tokenomics />
      <Partners />
      <Community />



    </>
  );
}

export default Home;

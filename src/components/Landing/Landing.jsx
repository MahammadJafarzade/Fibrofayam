import React from "react";
import "./Landing.css";
import overlayImg from "../../Media/FIBROFAYAM_Kataloq-2023-albomnaya.png";
import "../../Assets/reset.css";
import Moveon from "../Moveon/Moveon";
import '../../Assets/reset.css'
const Landing = () => {
  return (
    <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing-overlay">
              <div className="overlay-img">
                <Moveon />
              </div>
              <div className="overlay-description">
              <p>THE STONE COLLECTION</p>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Landing;

import React from "react";
import { Link } from "react-router-dom";

import "./LandPage.css";

import Carousel from "../../components/Carousel/Carousel"
// import dev from "../../assests/landing.jpg";
import finger from "../../assests/dev dev.webp";
// import avatar from "../../assests/avatar.png";
import land from "../../assests/happy dev.jpg";

const LandPage = () => {
  return (
    <div className="landpg">
      <img
        classname="phimg"
        src={finger}
        alt="developer"
        style={{ width: "1400px" }}
      />
<hr/>
   <Carousel/>
      <br/>
      <hr/>
      <div className="buttm">
        <div className="intro">
          <h5>
            DevNet rassemble une communauté de spécialistes en informatique
            passionnés par leur métier et par les nouvelles technologies. DevNet
            est un réseau social qui permet l'échange entre les différents
            developpeurs, mettons en oeuvre, chacun sans savoir-faire au service
            des autres afin de s'entreaider à relever les défis liés au
            développement et à l’apprentissage ses toutes dernières
            technologies.
          </h5>
        </div>
        <img
          classname="phimg"
          src={land}
          alt="jin"
          style={{ width: "300px", maxHeight:"300px" }}
        />
        </div>
             
          <div className="containerprimary">
            <h3>JOIN US AND BE DEVNET DEVELOPER</h3>
            <Link to="/register">
              <button type="button" className="primary-neumorph">
                CLICK ME
              </button>
            </Link>
          </div>
        </div>
        );
};

export default LandPage;

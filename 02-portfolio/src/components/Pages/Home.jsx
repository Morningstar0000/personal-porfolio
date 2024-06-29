import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Home() {
    return (
        <>
            <div className="Home">
                <div className="homeArticles">
                    <h1>Creative Developer </h1>
                </div>

                <div className="homeImg">
                    <img src="morningstar02.png" alt="myimage" className="myimage" />
                </div>
                <div className="social-box">
                <div className="social-links">
                     <a href="http://"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
                     <a href=""><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
                      <a href=""><FontAwesomeIcon icon={faInstagram} className="icons" /></a>
                </div>
                </div>
                <div className="myName">
                    <h2>MIRACLE MORNINGSTAR</h2>

                </div>

            </div>
        </>
    );
}

export default Home;

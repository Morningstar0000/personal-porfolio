import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook,  faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Home() {
    return (
        <>
            <div id="fadeInUp-animation" className="Home">
                <div className="homeArticles">
                    <h1>Creative Developer </h1>
                </div>

                <div className="homeImg">
                    <img src="/personal-porfolio/morningstar02.png" alt="myimage" className="myimage" />
                </div>
                <div className="social-box">
                <div className="social-links">
                     <a href="https://x.com/Morningsta27984"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
                     <a href="https://www.facebook.com/profile.php?id=61560496726757&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
                      <a href="https://www.linkedin.com/in/miracle-osaro-272a90321"><FontAwesomeIcon icon={faLinkedin} className="icons" /></a>
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

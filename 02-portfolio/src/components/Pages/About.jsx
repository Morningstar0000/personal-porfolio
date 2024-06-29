import React from "react";
import ProgressBar from"../Progressbar/ProgressBar"
import "../Progressbar/ProgressBar.scss";

const Skills = [
    { completed: 91, languages: "React" },
    { completed: 95, languages: "HTML" },
    { completed: 80, languages: "CSS" },
];
const OtherSkills = [
    { completed: 90, languages: "UI/UX Design" },
    { completed: 70, languages: "Graphics Design" },
    // { completed: 65, languages: "" },
];

function About() {
    return (
        <>
            <div >
                <div className="Abtbtn">
                    <button>About</button>
                    <h4>About Me</h4>
                </div>

                <div className="AboutMe">
                    <div className="img-container">
                    <img src="About02.jpeg" alt="AbtImg" className="Abtimg" />
                    </div>
                    
                    <div>
                        <h4>Miracle Morningstar</h4>
                        <p>Web Developer </p> <hr style={{ border: "" }} />
                        <p style={{color:"#b5b3ad"}}>
                            Hi, my name is Adriano Smith and I began using WordPress when it
                            first began. I’ve spent most of my waking hours for the last ten
                            years designing, programming and operating WordPress sites.
                        </p>
                        <p style={{color:"#b5b3ad"}}>
                            One of my specialties is taking an idea from scratch and creating
                            a full-fledged platform. I go beyond to produce sites with a
                            unique, outstanding, contemporary look-and-feel. With extensive
                            knowledge of web mechanics, I’m able to optimize complex
                            integrations to require little-to-no maintenance while running on
                            their own for years.
                        </p>
                        <hr style={{ border: "" }} />
                        <div className="AddresDetails">
                            <span>
                                <ul>
                                    <li>
                                        Adresses: <span>No 5, Ancient Kingdom of Benin</span>
                                    </li>
                                    <li>
                                        Email: <span>Miraclemorningstar9@gmail.com</span>
                                    </li>
                                    <li>
                                        Phone: <span>+2349157213323</span>
                                    </li>
                                </ul>
                            </span>
                            <span>
                                <ul>
                                    <li>
                                        Nationality: <span>Nigeria</span>
                                    </li>
                                    <li>
                                        Interest: <span>Nature</span>
                                    </li>
                                    <li>
                                        Freelance: <span>Available</span>
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <hr style={{ border: "" }} />
                        <div style={{ paddingTop: "20px" }}>
                            <button className="AbtCV">Download CV</button>
                        </div>
                    </div>
                </div>
                {/* Programming Skills  */}
                <div className="ProgressBar" >
                    <div >
                        <h5 style={{ paddingBottom: "20px", color:"#eeeeec", fontSize:"20px", fontWeight:"700" }}>Programming Skills</h5>
                        {Skills.map((s, idx) => (
                            <ProgressBar
                                key={idx}
                                completed={s.completed}
                                languages={s.languages}
                            />
                        ))}
                    </div>

                    <div>
                        <h5 style={{ paddingBottom: "20px" }}>Other Skills</h5>
                        {OtherSkills.map((s, idx) => (
                            <ProgressBar
                                key={idx}
                                completed={s.completed}
                                languages={s.languages}
                            />
                        ))}
                    </div>
                </div>
                {/* My Experience  */}
                <div className="MyExp">
                    <div>
                        <h5>My Experience</h5>
                        <p style={{ maxWidth: "500px",paddingTop:"10px" }}>
                            Hello there! My name is Miracle Morningstar. I am a web designer &
                            developer, and Im very passionate and dedicated to my work.
                        </p>
                        <button className="resumebtn">Download my resume</button>
                    </div>

                    <div className="ExpList">
                        <h5 style={{ color:"#eeeeec"}}>Experience</h5>
                        <ul>
                            <li>
                                2019-2020
                                <ol>Evato Market</ol>
                            </li>
                            <li>
                                2010-2021
                                <ol>Evato Market</ol>
                            </li>
                            <li>
                                2012-2023
                                <ol>Evato Market</ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

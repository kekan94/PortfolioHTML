import React from "react";
import './resources/styleReact.css';
import './resources/img-profile-picture.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFacebook, faGit, faGithub, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { /*faDesktop, faMobile, faTablet,*/ faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const profileImage = require('./resources/img-profile-picture.jpg');
const pdf = require('./resources/MyCV(IToptimized).pdf');

/*const htmlPagesArray = [
    '../Dasmotos-Arts-And-Crafts/index.html',
    '../TeaCozy/tea-cozy.html',
    '../Fotomatic/index.html',
    '../ColmarCapstoneAssets/index.html',
    '../FormAStory/index.html',
    '../PianoKeys/index.html'
];*/

function App() {

    return (
        <div className="App">
            <header>
                <nav>
                    <h2>Marko Kekanovic</h2>
                    <ul>
                        <li><a href="#personal-info">About Me</a></li>
                        <li><a href="#technologies">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="introduction">
                    <div id="picture">
                        <img src={profileImage} alt="Marko Kekanovic"/>
                        <a href={pdf} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFilePdf} /></a>
                    </div>
                    <div id="personalInfo">
                    <h2>Personal Information</h2>
                    <p>My name is Marko Kekanovic. I am 30 years old. I am an aspiring web developer based in Belgrade, Serbia,
                        currently in the process of searching for internship, part-time or full-time job opportunities.</p>
                    <p>Throughout formative years, I always had an idea of becoming a person that would one day add to the betterment
                        of the world with his work. At first, I dreamed of becoming a doctor that would eventually be doing all of his
                        work pro bono. As years went by, I started falling in love with a myriad of natural sciences. During high school
                        years, I was also enamored with history as it was helping me understand civilizations and what brought about
                        the world as we know it. In the end, I decided to attend the Faculty of Physics in Belgrade, Serbia.
                        After reaching the fourth year of my studies, I could not see myself having a career in physics because it does
                        not hold the same appeal as the physics of the past did for me. Thus, I left my studies and fell in love with 
                        programming as I now see that it is the perfect way of being creative whilst also being able to see the fruits
                        of my labor in action almost instantaneously. This also provides me with ample time to pursue my passion of
                        physical training.</p>
                    </div>
                </section>
                <div className="design">
                    <div className="designWhite"></div>
                </div>
                <section id="goals">
                    <h2>Goals</h2>
                    <div id="description">
                    <p>As stated before, during my studies at the Faculty of Physics in Belgrade, I found myself not having enough of an 
                        interest in any of the subject matters thus promoting a decision to undergo Codecademy Front-end Engineer Career
                        Path as programming offers intellectual challenges in an exciting manner unlike my studies at the Faculty of
                        Physics.</p>
                    <p>I was finally able to dedicate myself to learning and information retention and have been doing so for the past
                        two years. A lot of times, my perfectionism gets the best of me, thus leading me to research a lot of matters
                        that may have not been necessary in order to land me a job in the field.</p>
                    </div>
                </section>
                <div className="design">
                    <div className="designWhite"></div>
                </div>
                <section id="technologies">
                    <h2>Technologies</h2>
                    <h3>Various degrees of proficiency in the following technologies:</h3>
                    <div id="icons" className="technologyIcons">                   
                        <FontAwesomeIcon icon={faHtml5} />
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <FontAwesomeIcon icon={faJs} />
                        <FontAwesomeIcon icon={faReact} /> 
                        <FontAwesomeIcon icon={faGit} />
                        <FontAwesomeIcon icon={faGithub} /> 
                    </div>
                </section>
                <div className="design">
                    <div className="designWhite"></div>
                </div>
                <section id="projects">
                    <h2>Projects (In Order Of Increasing Skill Implementation)</h2>
                    <p>The following projects shown in the table below are implemented only as practice projects and are not fully 
                        functional as such. For full implementation, please <a href="#contact" className="textLink"><em>contact me</em></a>.
                        Projects were not intended to be a part of a Portfolio website initially, thus, some of them are either not at
                        all implemented into the HTML (in the case of JavaScript based projects) whilst others (React based) would add
                        unnecessary complication of code for a Portfolio website.</p>
                    <div id="table">
                        <div id="cell">
                            <p><FontAwesomeIcon icon={faHtml5} />&<FontAwesomeIcon icon={faCss3Alt} /></p>
                            <p>BASED</p>
                        </div>
                        <div id="cell">
                            <p><FontAwesomeIcon icon={faJs} /> BASED</p>
                        </div>
                        <div id="cell">
                            <p><FontAwesomeIcon icon={faReact} /> BASED</p>
                        </div>
                        <div id="cell">
                            <ul className="projects">
                                <li><a href="https://github.com/kekan94/Dasmotos-Arts-And-Crafts" target="_blank" rel="noreferrer">Dasmoto's Arts & Crafts</a></li>
                                <li><a href="https://github.com/kekan94/TeaCozy" target="_blank" rel="noreferrer">Tea Cozy</a></li>
                                <li><a href="https://github.com/kekan94/Fotomatic" target="_blank" rel="noreferrer">Fotomatic</a></li>
                                <li><a href="https://github.com/kekan94/ColmarCapstoneAssets" target="_blank" rel="noreferrer">Colmar Capstone Assets</a></li>
                                <li><a href="https://github.com/kekan94/FormAStory" target="_blank" rel="noreferrer">Form A Story</a></li>
                                <li><a href="https://github.com/kekan94/PianoKeys" target="_blank" rel="noreferrer">Piano Keys</a></li>
                            </ul>
                        </div>
                        <div id="cell">
                            <ul className="projects">
                                <li><a href="https://github.com/kekan94/MysteriousOrganism" target="_blank" rel="noreferrer">Mysterious Organism</a></li>
                                <li><a href="https://github.com/kekan94/CreditCardChecker" target="_blank" rel="noreferrer">Credit Card Checker</a></li>
                                <li><a href="../Number-Guesser/index.html" target="_blank" rel="noreferrer">Number Guesser</a></li>
                                <li><a href="https://github.com/kekan94/FindYourHat" target="_blank" rel="noreferrer">Find Your Hat</a></li>
                            </ul>
                        </div>
                        <div id="cell">
                            <ul className="projects">
                                {/*Fix the next two then add them
                                <li><a href="">Flashcards</a></li>
                                <li><a href="https://github.com/kekan94/Jamming">Jamming</a></li>*/}
                                <li><a href="https://github.com/kekan94/react-router" target="_blank" rel="noreferrer">Article React Router</a></li>
                                <li><a href="https://github.com/kekan94/AppointmentPlanner" target="_blank" rel="noreferrer">Appointment Planner</a></li>
                                <li><a href="https://github.com/kekan94/react-router-pet-project" target="_blank" rel="noreferrer">Pet React Router</a></li>
                                <li><a href="https://github.com/kekan94/reddit-client" target="_blank" rel="noreferrer">Reddit Client</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*<div className="design">
                    <div className="designWhite"></div>
                </div>
                <section id="compatibility">
                    <h2>Compatibility</h2>
                    <h3>Compatible in the following formats:</h3>
                    <div id="icons" className="compatibilityIcons">
                        <FontAwesomeIcon icon={faMobile} />
                        <FontAwesomeIcon icon={faTablet} />
                        <FontAwesomeIcon icon={faDesktop} />
                    </div>
                </section>*/}
            </main>
            <footer>
                <h2>Contact: 066/451-559</h2>
                <div id="icons" className="contact">
                    <ul id="contact">
                        <li><a href="https://www.facebook.com/keka.captainginyu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="mailto:marko.keka94@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
                        <li><a href="https://github.com/kekan94" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
};

export default App;
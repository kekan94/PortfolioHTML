import React from "react";
import './resources/styleReact.css';
import './resources/img-profile-picture.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFacebook, faGit, faGithub, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faEnvelopeSquare, faMobile, faTablet } from "@fortawesome/free-solid-svg-icons";

const profileImage = require('./resources/img-profile-picture.jpg');

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
                        <img src={profileImage}/>
                        <a href="./resources/My CV.pdf" target="_blank"><div class="peeler"><i class="fa-regular fa-file-pdf"></i></div></a>
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
                        Unfortunately, in time, I became disillusioned with the physics today as I had finally understood that it would
                        require for all of my time to be dedicated to this field and even still probably end up not feeling that I have
                        brought something of worth to the planet. Thus, I left my studies and fell in love with programming as I now see
                        that it is the perfect way of being creative whilst also being able to see the fruits of my labor in action. This
                        also provides me with ample time to pursue my passion of physical training.</p>
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
                        Physics which were full of tedious lessons.</p>
                    <p>After some lower-back issues that have plagued me for some time, I was finally able to dedicate myself to learning
                        and information retention and have been doing so for the past two years. A lot of times, my perfectionism gets 
                        the best of me, thus leading me to research a lot of matters that may have not been necessary in order to loand
                        me a job in the field.</p>
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
                    <p>The following projects shown in the table below are implemented only as practice projects and are not fully functional
                        as such. For full implementation, please <a href="#contact"><em>contact me</em></a>. Projects were not intended
                        to be a part of a Portfolio website initially, thus, some of them are either not at all implemented into the HTML
                        (in the case of JavaScript based projects) whilst others (React based) would add unnecessary complication of code
                        for a Portfolio website.</p>
                    <div id="table">
                        <div id="cell">
                            <p><i className="fa-brands fa-html5"></i>&<i className="fa-brands fa-css3-alt"></i> BASED</p>
                        </div>
                        <div id="cell">
                            <p><i className="fa-brands fa-js"></i> BASED</p>
                        </div>
                        <div id="cell">
                            <p><i className="fa-brands fa-react"></i> BASED</p>
                        </div>
                        <div id="cell">
                            <ul className="projects">
                                <li><a href="../Dasmotos-Arts-And-Crafts/index.html" target="_blank">Dasmoto's Arts & Crafts</a></li>
                                <li><a href="../TeaCozy/tea-cozy.html" target="_blank">Tea Cozy</a></li>
                                <li><a href="../Fotomatic/index.html" target="_blank">Fotomatic</a></li>
                                <li><a href="../ColmarCapstoneAssets/index.html" target="_blank">Capstone Colmar Assets</a></li>
                                <li><a href="../FormAStory/index.html" target="_blank">Form A Story</a></li>
                                <li><a href="../PianoKeys/index.html" target="_blank">Piano Keys</a></li>
                            </ul>
                        </div>
                        <div id="cell">
                            <ul className="projects">
                                <li><a href="https://github.com/kekan94/MysteriousOrganism" target="_blank">Mysterious Organism</a></li>
                                <li><a href="https://github.com/kekan94/CreditCardChecker" target="_blank">Credit Card Checker</a></li>
                                <li><a href="../Number-Guesser/index.html" target="_blank">Number Guesser</a></li>
                                <li><a href="https://github.com/kekan94/FindYourHat" target="_blank">Find Your Hat</a></li>
                            </ul>
                        </div>
                        <div id="cell">
                            <ul className="projects">
                                {/*Fix the next two then add them
                                <li><a href="">Flashcards</a></li>
                                <li><a href="https://github.com/kekan94/Jamming">Jamming</a></li>*/}
                                <li><a href="https://github.com/kekan94/react-router" target="_blank">Article React Router</a></li>
                                <li><a href="https://github.com/kekan94/AppointmentPlanner" target="_blank">Appointment Planner</a></li>
                                <li><a href="https://github.com/kekan94/react-router-pet-project" target="_blank">Pet React Router</a></li>
                                <li><a href="https://github.com/kekan94/reddit-client" target="_blank">Reddit Client</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="design">
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
                </section>
            </main>
            <footer>
                <h2>Contact</h2>
                <div id="icons" className="contact">
                    <ul id="contact">
                        <li><a href="https://www.facebook.com/keka.captainginyu" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="mailto:marko.keka94@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
                        <li><a href="https://github.com/kekan94" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
};

export default App;
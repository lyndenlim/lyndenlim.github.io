import { useState, useEffect } from "react"
import * as Scroll from "react-scroll"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

function HomePage() {
    const [showTopButton, setShowTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        });
    }, []);

    function scrollToAbout() {
        Scroll.scroller.scrollTo("about", {
            smooth: true
        });
    }

    function scrollToProjects() {
        Scroll.scroller.scrollTo("projects", {
            smooth: true
        });
    }

    function scrollToSkills() {
        Scroll.scroller.scrollTo("skills", {
            smooth: true
        });
    }

    function scrollToContact() {
        Scroll.scroller.scrollTo("contact", {
            smooth: true
        });
    }

    return (
        <>
            <div className="homepage-container">
                <div >
                    <div className="info-container">
                        <h1 id="name">Lynden Lim</h1>
                        <h3>Fullstack Developer</h3>
                    </div>
                    <div className="button-container">
                        <div className="about-button-container">
                            <span className="mas">ABOUT</span>
                            <button onClick={scrollToAbout}>ABOUT</button>
                        </div>
                        <div className="projects-button-container">
                            <span className="mas">PORTFOLIO</span>
                            <button onClick={scrollToProjects}>PORTFOLIO</button>
                        </div>
                        <div className="skills-button-container">
                            <span className="mas">SKILLS</span>
                            <button onClick={scrollToSkills}>SKILLS</button>
                        </div>
                        <div className="contact-button-container">
                            <span className="mas">CONTACT</span>
                            <button onClick={scrollToContact}>CONTACT</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="about-container" name="about">
                <About />
            </div>
            <hr />
            <div className="projects-container" name="projects">
                <Projects />
            </div>
            <hr />
            <div className="skills-container" name="skills">
                <Skills />
            </div>
            <hr />
            <div className="contact-container" name="contact">
                <Contact />
            </div>
            {showTopButton ? <button className="to-top-button" onClick={() => Scroll.animateScroll.scrollToTop()}><FontAwesomeIcon icon={faArrowUp} /></button> : null}
        </>
    )
}

export default HomePage
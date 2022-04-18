import { useState, useEffect } from "react"
import * as Scroll from "react-scroll"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons"

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
                            <span className="mas">About</span>
                            <button onClick={scrollToAbout}>About</button>
                        </div>
                        <div className="projects-button-container">
                            <span className="mas">Projects</span>
                            <button onClick={scrollToProjects}>Projects</button>
                        </div>
                        <div className="skills-button-container">
                            <span className="mas">Skills</span>
                            <button onClick={scrollToSkills}>Skills</button>
                        </div>
                        <div className="contact-button-container">
                            <span className="mas">Contact</span>
                            <button onClick={scrollToContact}>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container" name="about">
                <About />
            </div>
            <div className="projects-container" name="projects">
                <Projects />
            </div>
            <div className="skills-container" name="skills">
                <Skills />
            </div>
            <div className="contact-container" name="contact">
                <Contact />
            </div>
            {showTopButton ? <button className="back-to-top-position" onClick={() => Scroll.animateScroll.scrollToTop()}><FontAwesomeIcon icon={faArrowUpLong} /></button> : null}
        </>
    )
}

export default HomePage
import { useState, useEffect, useRef } from "react"
import * as Scroll from "react-scroll"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

function HomePage() {
    const [showTopButton, setShowTopButton] = useState(false)
    const [showNavBar, setShowNavBar] = useState(false)
    const aboutSection = useRef()
    const projectsSection = useRef()
    const skillsSection = useRef()
    const contactSection = useRef()
    const aboutNav = useRef()
    const projectsNav = useRef()
    const skillsNav = useRef()
    const contactNav = useRef()
    const [sections, setSections] = useState([aboutSection, projectsSection, skillsSection, contactSection])
    const [navs, setNavs] = useState([aboutNav, projectsNav, skillsNav, contactNav])
    const [currentSection, setCurrentSection] = useState("")
    console.log(currentSection)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            sections.forEach(section => {
                if (window.scrollY >= section.current.offsetTop - section.current.offsetHeight / 3) {
                    setCurrentSection(section)
                    setShowTopButton(true);
                    setShowNavBar(true);
                } else if (window.scrollY < 500) {
                    setShowTopButton(false);
                    setShowNavBar(false);
                }
            })


            navs.forEach(nav => {
                if (nav.current) {
                    nav.current.classList.remove("active")
                    if (nav.current.className === currentSection.current.id) {
                        nav.current.classList.add("active")
                    }
                }
            })
        });
    }, [currentSection]);

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
            {showNavBar ?
                <nav>
                    <div className="container">
                        <ul>
                            <li className="about" onClick={scrollToAbout} ref={aboutNav}>ABOUT</li>
                            <li className="projects" onClick={scrollToProjects} ref={projectsNav}>PORTFOLIO</li>
                            <li className="skills" onClick={scrollToSkills} ref={skillsNav}>SKILLS</li>
                            <li className="contact" onClick={scrollToContact} ref={contactNav}>CONTACT</li>
                        </ul>
                    </div>
                </nav>
                :
                null}
            <div className="homepage-container">
                <div >
                    <div className="info-container">
                        <h1 id="name">Lynden Lim</h1>
                        <h2>Fullstack Developer</h2>
                    </div>
                    <div className="button-container">
                        <div className="about-button-container">
                            <span className="mask">ABOUT</span>
                            <button onClick={scrollToAbout}>ABOUT</button>
                        </div>
                        <div className="projects-button-container">
                            <span className="mask">PORTFOLIO</span>
                            <button onClick={scrollToProjects}>PORTFOLIO</button>
                        </div>
                        <div className="skills-button-container">
                            <span className="mask">SKILLS</span>
                            <button onClick={scrollToSkills}>SKILLS</button>
                        </div>
                        <div className="contact-button-container">
                            <span className="mask">CONTACT</span>
                            <button onClick={scrollToContact}>CONTACT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container" name="about" id="about" ref={aboutSection}>
                <About />
            </div>
            <div className="projects-container" name="projects" id="projects" ref={projectsSection}>
                <Projects />
            </div>
            <div className="skills-container" name="skills" id="skills" ref={skillsSection}>
                <Skills />
            </div>
            <div className="contact-container" name="contact" id="contact" ref={contactSection}>
                <Contact />
            </div>
            {showTopButton ? <button className="to-top-button" onClick={() => Scroll.animateScroll.scrollToTop()}><FontAwesomeIcon icon={faArrowUp} /></button> : null}
        </>
    )
}

export default HomePage
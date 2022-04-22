import { useState, useEffect, useRef } from "react"
import * as Scroll from "react-scroll"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import NavigationButtons from "./NavigationButtons"
import NavBar from "./NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

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
    const navbar = useRef()
    const [sections, setSections] = useState([aboutSection, projectsSection, skillsSection, contactSection])
    const [navs, setNavs] = useState([aboutNav, projectsNav, skillsNav, contactNav])
    const [currentSection, setCurrentSection] = useState("")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            sections.forEach(section => {
                if (window.scrollY >= section.current.offsetTop - section.current.offsetHeight / 3) {
                    if (navbar.current) {
                        navbar.current.classList.add("slide")
                    }
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
                    if (currentSection && nav.current.className === currentSection.current.id) {
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
                <NavBar
                    showNavBar={showNavBar}
                    scrollToAbout={scrollToAbout}
                    scrollToProjects={scrollToProjects}
                    scrollToSkills={scrollToSkills}
                    scrollToContact={scrollToContact}
                    aboutNav={aboutNav}
                    projectsNav={projectsNav}
                    skillsNav={skillsNav}
                    contactNav={contactNav}
                    navbar={navbar}
                />
                :
                null}
            <div className="homepage-container">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
                    <div className="info-container">
                        <h1 id="name">Lynden Lim</h1>
                        <h2 id="title">Full Stack Developer</h2>
                    </div>
                    <NavigationButtons scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToSkills={scrollToSkills} scrollToContact={scrollToContact} />
                </motion.div>
            </div>
            <div className="about-container" name="about" id="about" ref={aboutSection}>
                <About />
            </div>
            <hr />
            <div className="projects-container" name="projects" id="projects" ref={projectsSection}>
                <Projects />
            </div>
            <hr />
            <div className="skills-container" name="skills" id="skills" ref={skillsSection}>
                <Skills />
            </div>
            <hr />
            <div className="contact-container" name="contact" id="contact" ref={contactSection}>
                <Contact />
            </div>
            {showTopButton ? <motion.button initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="to-top-button" onClick={() => Scroll.animateScroll.scrollToTop()}><FontAwesomeIcon icon={faArrowUp} /></motion.button> : null}
        </>
    )
}

export default HomePage
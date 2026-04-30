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
    const [theme, setTheme] = useState('dark')
    const aboutSection = useRef()
    const projectsSection = useRef()
    const skillsSection = useRef()
    const contactSection = useRef()
    const aboutNav = useRef()
    const projectsNav = useRef()
    const skillsNav = useRef()
    const contactNav = useRef()
    const navbar = useRef()
    const [sections] = useState([aboutSection, projectsSection, skillsSection, contactSection])
    const [navs] = useState([aboutNav, projectsNav, skillsNav, contactNav])
    const [currentSection, setCurrentSection] = useState("")

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            sections.forEach(section => {
                if (window.scrollY >= section.current.offsetTop - section.current.offsetHeight / 3) {
                    if (navbar.current) navbar.current.classList.add("slide")
                    setCurrentSection(section)
                    setShowTopButton(true)
                    setShowNavBar(true)
                } else if (window.scrollY < 500) {
                    setShowTopButton(false)
                    setShowNavBar(false)
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
        })
    }, [currentSection])

    const scrollToAbout    = () => Scroll.scroller.scrollTo("about",    { smooth: true })
    const scrollToProjects = () => Scroll.scroller.scrollTo("projects", { smooth: true })
    const scrollToSkills   = () => Scroll.scroller.scrollTo("skills",   { smooth: true })
    const scrollToContact  = () => Scroll.scroller.scrollTo("contact",  { smooth: true })

    return (
        <>
            {showNavBar &&
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
                    theme={theme}
                    toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                />
            }
            <div className="homepage-container">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
                    <div className="info-container">
                        <h1 id="name">Lynden Lim</h1>
                        <h2 id="title">Software Engineer</h2>
                    </div>
                    <NavigationButtons
                        scrollToAbout={scrollToAbout}
                        scrollToProjects={scrollToProjects}
                        scrollToSkills={scrollToSkills}
                        scrollToContact={scrollToContact}
                    />
                </motion.div>
                <div className="scroll-hint">↓ scroll</div>
            </div>
            <div className="about-container"   name="about"    id="about"    ref={aboutSection}>
                <About />
            </div>
            <div className="projects-container" name="projects" id="projects" ref={projectsSection}>
                <Projects />
            </div>
            <div className="skills-container"  name="skills"   id="skills"   ref={skillsSection}>
                <Skills />
            </div>
            <div className="contact-container" name="contact"  id="contact"  ref={contactSection}>
                <Contact />
            </div>
            {showTopButton &&
                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="to-top-button"
                    onClick={() => Scroll.animateScroll.scrollToTop()}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </motion.button>
            }
        </>
    )
}

export default HomePage

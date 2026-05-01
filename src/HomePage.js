import { useState, useEffect, useRef } from "react"
import * as Scroll from "react-scroll"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import NavBar from "./NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

function HomePage() {
    const [showTopButton, setShowTopButton] = useState(false)
    const [showNavBar, setShowNavBar] = useState(false)
    const [theme, setTheme] = useState('dark')
    const [activeSectionId, setActiveSectionId] = useState('')
    const aboutSection = useRef()
    const projectsSection = useRef()
    const skillsSection = useRef()
    const contactSection = useRef()
    const navbar = useRef()
    const [sections] = useState([aboutSection, projectsSection, skillsSection, contactSection])

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    useEffect(() => {
        const onScroll = () => {
            let found = ''
            sections.forEach(section => {
                if (window.scrollY >= section.current.offsetTop - section.current.offsetHeight / 3) {
                    if (navbar.current) navbar.current.classList.add("slide")
                    found = section.current.id
                    setShowTopButton(true)
                    setShowNavBar(true)
                }
            })
            if (window.scrollY < 500) {
                setShowTopButton(false)
                setShowNavBar(false)
                found = ''
            }
            setActiveSectionId(found)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [sections])

    const scrollToAbout    = () => Scroll.scroller.scrollTo("about",    { smooth: true, duration: 400 })
    const scrollToProjects = () => Scroll.scroller.scrollTo("projects", { smooth: true, duration: 400 })
    const scrollToSkills   = () => Scroll.scroller.scrollTo("skills",   { smooth: true, duration: 400 })
    const scrollToContact  = () => Scroll.scroller.scrollTo("contact",  { smooth: true, duration: 400 })

    return (
        <>
            {showNavBar &&
                <NavBar
                    scrollToAbout={scrollToAbout}
                    scrollToProjects={scrollToProjects}
                    scrollToSkills={scrollToSkills}
                    scrollToContact={scrollToContact}
                    navbar={navbar}
                    theme={theme}
                    activeSectionId={activeSectionId}
                    toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                />
            }

            <div className="homepage-container">
                <div className="hero-inner">
                    <h1 id="name">Lynden Lim</h1>
                    <div className="hero-role-row">
                        <span className="hero-hairline" />
                        <h2 id="title">Software Engineer</h2>
                    </div>
                    <div className="button-container">
                        <button className="hero-btn" onClick={scrollToAbout}><span>About</span></button>
                        <button className="hero-btn" onClick={scrollToProjects}><span>Portfolio</span></button>
                        <button className="hero-btn" onClick={scrollToSkills}><span>Skills</span></button>
                        <button className="hero-btn" onClick={scrollToContact}><span>Contact</span></button>
                    </div>
                </div>
                <div className="scroll-hint">↓ scroll</div>
            </div>

            <div className="about-container"    name="about"    id="about"    ref={aboutSection}>
                <About />
            </div>
            <div className="projects-container" name="projects" id="projects" ref={projectsSection}>
                <Projects />
            </div>
            <div className="skills-container"   name="skills"   id="skills"   ref={skillsSection}>
                <Skills />
            </div>
            <div className="contact-container"  name="contact"  id="contact"  ref={contactSection}>
                <Contact />
            </div>

            <footer className="site-footer">
                <span className="site-footer-name">Lynden Lim</span>
                <span className="site-footer-copy">© {new Date().getFullYear()}</span>
            </footer>

            {showTopButton &&
                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="to-top-button"
                    onClick={() => Scroll.animateScroll.scrollToTop({ duration: 400 })}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </motion.button>
            }
        </>
    )
}

export default HomePage

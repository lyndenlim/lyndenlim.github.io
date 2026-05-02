import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import * as Scroll from "react-scroll"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
import NavBar from "./NavBar"
import Cursor from "./Cursor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { motion, useMotionValue, useSpring, useViewportScroll } from "framer-motion"
import { SCROLL_DURATION } from "./constants"

function MagneticButton({ children, className, onClick }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 200, damping: 20 })
    const springY = useSpring(y, { stiffness: 200, damping: 20 })

    const onMouseMove = e => {
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width  / 2)) * 0.3)
        y.set((e.clientY - (r.top  + r.height / 2)) * 0.3)
    }
    const onMouseLeave = () => { x.set(0); y.set(0) }

    return (
        <motion.button
            ref={ref}
            className={className}
            style={{ x: springX, y: springY }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )
}

function HomePage() {
    const [showTopButton, setShowTopButton] = useState(false)
    const [theme, setTheme] = useState(
        () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    )
    const [activeSectionId, setActiveSectionId] = useState('')
    const aboutSection    = useRef()
    const projectsSection = useRef()
    const skillsSection   = useRef()
    const contactSection  = useRef()
    const navbar          = useRef()
    const sections = useMemo(
        () => [aboutSection, projectsSection, skillsSection, contactSection],
        []
    )

    const { scrollYProgress } = useViewportScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    useEffect(() => {
        document.body.classList.toggle('light', theme === 'light')
    }, [theme])

    useEffect(() => {
        const onScroll = () => {
            let found = ''
            sections.forEach(section => {
                if (window.scrollY >= section.current.offsetTop - section.current.offsetHeight / 3) {
                    if (navbar.current) navbar.current.classList.add("slide")
                    found = section.current.id
                    setShowTopButton(true)
                }
            })
            if (window.scrollY < 500) {
                setShowTopButton(false)
                found = ''
            }
            setActiveSectionId(found)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [sections])

    const scrollTo = useCallback((id) => {
        Scroll.scroller.scrollTo(id, { smooth: true, duration: SCROLL_DURATION })
    }, [])

    return (
        <>
            <Cursor />
            <motion.div className="scroll-progress" style={{ scaleX }} />
            <a href="#about" className="skip-to-content">Skip to content</a>

            {showTopButton &&
                <NavBar
                    scrollTo={scrollTo}
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
                        <MagneticButton className="hero-btn" onClick={() => scrollTo("about")}><span>About</span></MagneticButton>
                        <MagneticButton className="hero-btn" onClick={() => scrollTo("projects")}><span>Portfolio</span></MagneticButton>
                        <MagneticButton className="hero-btn" onClick={() => scrollTo("skills")}><span>Skills</span></MagneticButton>
                        <MagneticButton className="hero-btn" onClick={() => scrollTo("contact")}><span>Contact</span></MagneticButton>
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
                    onClick={() => Scroll.animateScroll.scrollToTop({ duration: SCROLL_DURATION })}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </motion.button>
            }
        </>
    )
}

export default HomePage

import { motion } from "framer-motion"
import * as Scroll from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"

function NavBar({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact, aboutNav, projectsNav, skillsNav, contactNav, navbar, theme, toggleTheme }) {
    return (
        <motion.div
            className="nav"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            ref={navbar}
        >
            <div className="nav-inner">
                <div className="nav-brand" onClick={() => Scroll.animateScroll.scrollToTop()}>
                    Lynden Lim
                </div>
                <ul className="nav-links">
                    <li className="about"    onClick={scrollToAbout}    ref={aboutNav}>About</li>
                    <li className="projects" onClick={scrollToProjects} ref={projectsNav}>Portfolio</li>
                    <li className="skills"   onClick={scrollToSkills}   ref={skillsNav}>Skills</li>
                    <li className="contact"  onClick={scrollToContact}  ref={contactNav}>Contact</li>
                    <a
                        className="nav-resume"
                        href="https://drive.google.com/file/d/1WIChRNkJUiPiXZ6TOQw-7SFxy29jI6g3/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume ↗
                    </a>
                    <li className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default NavBar

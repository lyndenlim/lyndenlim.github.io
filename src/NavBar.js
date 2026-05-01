import { motion, AnimatePresence } from "framer-motion"
import * as Scroll from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"

const navItems = [
    { label: 'About',     id: 'about',    scrollTo: 'scrollToAbout'    },
    { label: 'Portfolio', id: 'projects', scrollTo: 'scrollToProjects' },
    { label: 'Skills',    id: 'skills',   scrollTo: 'scrollToSkills'   },
    { label: 'Contact',   id: 'contact',  scrollTo: 'scrollToContact'  },
]

function NavBar({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact, navbar, theme, toggleTheme, activeSectionId }) {
    const scrollFns = { scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }

    return (
        <motion.div
            className="nav"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            ref={navbar}
        >
            <div className="nav-inner">
                <div className="nav-brand" onClick={() => Scroll.animateScroll.scrollToTop({ duration: 400 })}>
                    Lynden Lim
                </div>
                <ul className="nav-links">
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className={activeSectionId === item.id ? 'active' : ''}
                            onClick={scrollFns[item.scrollTo]}
                        >
                            {activeSectionId === item.id && (
                                <motion.div
                                    className="nav-pill"
                                    layoutId="navPill"
                                    transition={{ type: 'spring', stiffness: 240, damping: 16, mass: 0.8 }}
                                />
                            )}
                            <span className="nav-link-text">{item.label}</span>
                        </li>
                    ))}
                    <a
                        className="nav-resume"
                        href="https://drive.google.com/file/d/1WIChRNkJUiPiXZ6TOQw-7SFxy29jI6g3/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
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

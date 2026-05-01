import { motion } from "framer-motion"
import * as Scroll from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { RESUME_URL, SCROLL_DURATION } from "./constants"

const navItems = [
    { label: 'About',     id: 'about'    },
    { label: 'Portfolio', id: 'projects' },
    { label: 'Skills',    id: 'skills'   },
    { label: 'Contact',   id: 'contact'  },
]

function NavBar({ scrollTo, navbar, theme, toggleTheme, activeSectionId }) {
    return (
        <motion.div
            className="nav"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            ref={navbar}
        >
            <div className="nav-inner">
                <div className="nav-brand" onClick={() => Scroll.animateScroll.scrollToTop({ duration: SCROLL_DURATION })}>
                    Lynden Lim
                </div>
                <ul className="nav-links">
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className={activeSectionId === item.id ? 'active' : ''}
                            onClick={() => scrollTo(item.id)}
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
                        href={RESUME_URL}
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

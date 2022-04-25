import { motion } from "framer-motion"

function NavBar({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact, aboutNav, projectsNav, skillsNav, contactNav, navbar, showNavBar }) {
    return (
        <motion.div className="nav" initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} ref={navbar}>
            <div className="container">
                <ul>
                    <li className="about" onClick={scrollToAbout} ref={aboutNav}>ABOUT</li>
                    <li className="projects" onClick={scrollToProjects} ref={projectsNav}>PORTFOLIO</li>
                    <li className="skills" onClick={scrollToSkills} ref={skillsNav}>SKILLS</li>
                    <li className="contact" onClick={scrollToContact} ref={contactNav}>CONTACT</li>
                </ul>
            </div>
        </motion.div>
    )
}

export default NavBar
function NavBar({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact, aboutNav, projectsNav, skillsNav, contactNav, navbar }) {
    return (
        <nav ref={navbar}>
            <div className="container">
                <ul>
                    <li className="about" onClick={scrollToAbout} ref={aboutNav}>ABOUT</li>
                    <li className="projects" onClick={scrollToProjects} ref={projectsNav}>PORTFOLIO</li>
                    <li className="skills" onClick={scrollToSkills} ref={skillsNav}>SKILLS</li>
                    <li className="contact" onClick={scrollToContact} ref={contactNav}>CONTACT</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
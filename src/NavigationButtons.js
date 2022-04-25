import React from 'react'

function NavigationButtons({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }) {
    return (
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
    )
}

export default NavigationButtons
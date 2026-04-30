import React from 'react'

function NavigationButtons({ scrollToAbout, scrollToProjects, scrollToSkills, scrollToContact }) {
    return (
        <div className="button-container">
            <button className="hero-btn" onClick={scrollToAbout}><span>About</span></button>
            <button className="hero-btn" onClick={scrollToProjects}><span>Portfolio</span></button>
            <button className="hero-btn" onClick={scrollToSkills}><span>Skills</span></button>
            <button className="hero-btn" onClick={scrollToContact}><span>Contact</span></button>
        </div>
    )
}

export default NavigationButtons

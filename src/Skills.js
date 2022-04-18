import React from 'react'
import react from "./images/react.png"
import python from "./images/python.png"
import ruby from "./images/ruby.png"
import javascript from "./images/javascript.png"
import postgresql from "./images/postgresql.png"
import git from "./images/git.png"
import html from "./images/html.png"
import css from "./images/css.png"

function Skills() {
    return (
        <div className="skill-container">
            <div className="skill-image-container">
                <img className="skill-image" src={react} alt="react" />
                <div className="skill">React</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={python} alt="python" />
                <div className="skill">Python</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={ruby} alt="ruby" />
                <div className="skill">Ruby</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={postgresql} alt="postgresql" />
                <div className="skill">PostgreSQL</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={git} alt="git" />
                <div className="skill">GIT</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={javascript} alt="javascript" />
                <div className="skill">JavaScript</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={html} alt="html" />
                <div className="skill">HTML</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={css} alt="css" />
                <div className="skill">CSS</div>
            </div>
        </div>

    )
}

export default Skills
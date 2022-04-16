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
                <br />
                <span className="skill">React</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={python} alt="python" />
                <br />
                <span className="skill">Python</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={ruby} alt="ruby" />
                <br />
                <span className="skill">Ruby</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={postgresql} alt="postgresql" />
                <br />
                <span className="skill">PostgreSQL</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={git} alt="git" />
                <br />
                <span className="skill">GIT</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={javascript} alt="javascript" />
                <br />
                <span className="skill">JavaScript</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={html} alt="html" />
                <br />
                <span className="skill">HTML</span>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={css} alt="css" />
                <br />
                <span className="skill">CSS</span>
            </div>
        </div >

    )
}

export default Skills
import React from 'react'
import react from "./images/react.png"
import ruby from "./images/ruby.png"
import ruby_on_rails from "./images/ruby_on_rails.png"
import javascript from "./images/javascript.png"
import postgresql from "./images/postgresql.png"
import git from "./images/git.png"
import html from "./images/html.png"
import css from "./images/css.png"
import { motion } from "framer-motion"

function Skills() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className="skill-container">
            <div className="skill-image-container">
                <img className="skill-image" src={react} alt="react" />
                <div className="skill">React</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={ruby} alt="ruby" />
                <div className="skill">Ruby</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={ruby_on_rails} alt="ruby-on-rails" />
                <div className="skill">Ruby on Rails</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={postgresql} alt="postgresql" />
                <div className="skill">PostgreSQL</div>
            </div>
            <div className="skill-image-container">
                <img className="skill-image" src={git} alt="git" />
                <div className="skill">Git</div>
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
        </motion.div>

    )
}

export default Skills
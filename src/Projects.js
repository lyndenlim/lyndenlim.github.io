import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import undecided from "./images/undecided.png"
import hurdle from "./images/hurdle.png"
import schema from "./images/schema.png"

function Projects() {
    return (
        <div className="container">
            <div className="row project-container">
                <div className="col-6">
                    <div className="project-image">
                        <a href="https://undecided-application.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img width="100%" src={undecided} alt="undecided" /></a>
                    </div>
                </div>
                <div className="col-6 project-content">
                    <div>
                        <h3>Undec¿ded</h3>
                        <p>Restaurant/recipe assistant with randomizer feature that returns a restaurant within a mile radius of your current location.</p>
                        <p>React, Ruby on Rails, PostgreSQL, JavaScript, HTML/CSS</p>
                        <a className="project-link github" href="https://github.com/lyndenlim/undecided" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        &nbsp;
                        <a className="project-link website" href="https://undecided-application.herokuapp.com/"><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            </div>
            <div className="row project-container">
                <div className="col-6 project-content">
                    <div>
                        <h3>SCHEM△</h3>
                        <p>Video viewing and streaming platform that centralizes topics in technology, programming, and science.</p>
                        <p>React, Ruby on Rails, PostgreSQL, JavaScript, HTML/CSS/SASS</p>
                        <a className="project-link github" href="https://github.com/lyndenlim/schema" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        &nbsp;
                        <a className="project-link website" href="https://schema-project.herokuapp.com/"><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
                <div className="col-6">
                    <div className="project-image">
                        <a href="https://schema-project.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img width="100%" src={schema} alt="schema" /></a>
                    </div>
                </div>
            </div>
            <div className="row project-container">
                <div className="col-6">
                    <div className="project-image">
                        <a href="https://lyndenlim.github.io/hurdle/" target="_blank" rel="noopener noreferrer"><img width="100%" src={hurdle} alt="hurdle" /></a>
                    </div>
                </div>
                <div className="col-6 project-content" >
                    <div>
                        <h3>Hurdle</h3>
                        <p>Inspired by WORDLE. Guess the word in 6 tries, dictionary entry of word appears after game concludes.</p>
                        <p>React, JavaScript, HTML/CSS</p>
                        <a className="project-link github" href="https://github.com/lyndenlim/hurdle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        &nbsp;
                        <a className="project-link website" href="https://lyndenlim.github.io/hurdle/"><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
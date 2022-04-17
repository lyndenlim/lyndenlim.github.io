import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

function Projects() {
    return (
        <>
            <div>
                <h3>Undecided</h3>
                <p>Img here</p>
                <p>Restaurant/recipe assistant with randomizer feature that returns a restaurant within a mile radius of your current location.</p>
                <p>React, Ruby on Rails, PostgreSQL, JavaScript, HTML/CSS</p>
                <a className="project-link github" href="https://github.com/lyndenlim/undecided" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                &nbsp;
                <a className="project-link website" href="https://undecided-application.herokuapp.com/"><FontAwesomeIcon icon={faLink} /></a>
            </div>
            <div>
                <h3>Schema</h3>
                <p>Img here</p>
                <p>Video viewing and streaming platform that centralizes topics in technology, programming, and science.</p>
                <p>React, Ruby on Rails, PostgreSQL, JavaScript, HTML/CSS/SASS</p>
                <a className="project-link github" href="https://github.com/lyndenlim/schema" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                &nbsp;
                <a className="project-link website" href="https://schema-project.herokuapp.com/"><FontAwesomeIcon icon={faLink} /></a>
            </div>
            <div>
                <h3>Hurdle</h3>
                <p>Img here</p>
                <p>Inspired by WORDLE. Guess the word in 6 tries, dictionary entry of word appears after game concludes.</p>
                <p>React, JavaScript, HTML/CSS</p>
                <a className="project-link github" href="https://github.com/lyndenlim/hurdle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                &nbsp;
                <a className="project-link website" href="https://lyndenlim.github.io/hurdle/"><FontAwesomeIcon icon={faLink} /></a>
            </div>
        </>
    )
}

export default Projects
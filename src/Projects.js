import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faStore } from "@fortawesome/free-solid-svg-icons"
import inconvenience1 from "./images/inconvenience1.gif"
import inconvenience2 from "./images/inconvenience2.gif"
import inconvenience3 from "./images/inconvenience3.gif"
import inconvenience4 from "./images/inconvenience4.gif"
import undecided1 from "./images/undecided1.gif"
import undecided2 from "./images/undecided2.gif"
import undecided3 from "./images/undecided3.gif"
import undecided4 from "./images/undecided4.gif"
import schema1 from "./images/schema1.gif"
import schema2 from "./images/schema2.gif"
import schema3 from "./images/schema3.gif"
import schema4 from "./images/schema4.gif"
import hurdle1 from "./images/hurdle1.png"
import hurdle2 from "./images/hurdle2.png"
import hurdle3 from "./images/hurdle3.png"
import Modal from "react-bootstrap/Modal"
import Carousel from "react-bootstrap/Carousel"
import { motion } from "framer-motion"
import { SECTION_MOTION } from "./constants"

const projects = [
    {
        id: 0,
        title: 'The Inconvenience Store',
        icon: <FontAwesomeIcon icon={faStore} />,
        sub: 'React JS / Ruby on Rails / PostgreSQL',
        bg: inconvenience1,
        images: [inconvenience1, inconvenience2, inconvenience3, inconvenience4],
        interval: 15000,
        carouselClass: 'carousel-dark',
        description: 'E-commerce store that features your everyday inconvenient items.',
        github: 'https://github.com/lyndenlim/the-inconvenience-store',
        live: 'https://the-inconvenience-store.herokuapp.com/',
    },
    {
        id: 1,
        title: 'Undec¿ded',
        icon: '¿',
        sub: 'React JS / Ruby on Rails / PostgreSQL',
        bg: undecided1,
        images: [undecided1, undecided2, undecided3, undecided4],
        interval: 15000,
        carouselClass: 'carousel-dark',
        description: 'Restaurant/recipe assistant with randomizer feature that returns a restaurant within a mile radius of your current location.',
        github: 'https://github.com/lyndenlim/undecided',
        live: 'https://undecided-application.herokuapp.com/',
    },
    {
        id: 2,
        title: 'SCHEM△',
        icon: '△',
        sub: 'React JS / Ruby on Rails / PostgreSQL',
        bg: schema1,
        images: [schema1, schema2, schema3, schema4],
        interval: 30000,
        carouselClass: '',
        description: 'Video viewing and streaming platform that centralizes topics in technology, programming, and science.',
        github: 'https://github.com/lyndenlim/schema',
        live: 'https://schema-project.herokuapp.com/',
    },
    {
        id: 3,
        title: 'Hurdle',
        icon: 'H',
        sub: 'React JS',
        bg: hurdle1,
        images: [hurdle1, hurdle2, hurdle3],
        interval: 7000,
        carouselClass: '',
        description: 'Inspired by WORDLE. Guess the word in 6 tries, dictionary entry of word appears after game concludes.',
        github: 'https://github.com/lyndenlim/hurdle',
        live: 'https://lyndenlim.github.io/hurdle/',
    },
]

function ProjectModal({ project, onHide }) {
    if (!project) return null
    return (
        <Modal show onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Carousel className={project.carouselClass} interval={project.interval}>
                    {project.images.map((src, i) => (
                        <Carousel.Item key={src}>
                            <img className="img-fluid carousel-image" src={src} alt={`${project.title} ${i + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <hr />
                {project.description}
                <div className="project-link-container">
                    <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="project-link" href={project.live} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDesktop} />
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    )
}

function Projects() {
    const [active, setActive] = useState(0)
    const [modalProject, setModalProject] = useState(null)

    return (
        <motion.div {...SECTION_MOTION} className="projects-wrapper">
            <div className="proj-marquee-outer">
                <div className="proj-marquee-track">
                    {Array(8).fill(null).map((_, i) => (
                        <span key={i} className="proj-marquee-item">PROJECTS — PORTFOLIO — WORK — </span>
                    ))}
                </div>
            </div>

            <div className="section-label">Projects</div>

            <div className="options">
                {projects.map((p, i) => (
                    <div
                        key={p.id}
                        className={`option${active === i ? ' active' : ''}`}
                        style={{ backgroundImage: `url(${p.bg})` }}
                        onClick={() => setActive(i)}
                    >
                        <div className="label">
                            <div className="icon">{p.icon}</div>
                            <div className="info">
                                <div className="main">
                                    {p.title}
                                    <div className="more-button-container">
                                        <button
                                            className="more-button"
                                            onClick={(e) => { e.stopPropagation(); setModalProject(p) }}
                                        >
                                            More
                                        </button>
                                    </div>
                                </div>
                                <div className="sub">{p.sub}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal project={modalProject} onHide={() => setModalProject(null)} />
        </motion.div>
    )
}

export default Projects

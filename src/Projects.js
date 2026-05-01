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

function Projects() {
    const [active, setActive] = useState(0)
    const [modal, setModal] = useState(null)

    const projects = [
        {
            id: 0,
            title: 'The Inconvenience Store',
            icon: <FontAwesomeIcon icon={faStore} />,
            sub: 'React JS / Ruby on Rails / PostgreSQL',
            bg: inconvenience1,
        },
        {
            id: 1,
            title: 'Undec¿ded',
            icon: '¿',
            sub: 'React JS / Ruby on Rails / PostgreSQL',
            bg: undecided1,
        },
        {
            id: 2,
            title: 'SCHEM△',
            icon: '△',
            sub: 'React JS / Ruby on Rails / PostgreSQL',
            bg: schema1,
        },
        {
            id: 3,
            title: 'Hurdle',
            icon: 'H',
            sub: 'React JS',
            bg: hurdle1,
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="projects-wrapper"
        >
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
                                            onClick={(e) => { e.stopPropagation(); setModal(p.id) }}
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

            {/* Modals */}
            <Modal show={modal === 0} onHide={() => setModal(null)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>The Inconvenience Store</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Carousel className="carousel-dark" interval={15000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={inconvenience1} alt="inconvenience1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={inconvenience2} alt="inconvenience2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={inconvenience3} alt="inconvenience3" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={inconvenience4} alt="inconvenience4" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    E-commerce store that features your everyday inconvenient items.
                    <div className="project-link-container">
                        <a className="project-link" href="https://github.com/lyndenlim/the-inconvenience-store" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="project-link" href="https://the-inconvenience-store.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={modal === 1} onHide={() => setModal(null)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Undec¿ded</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Carousel className="carousel-dark" interval={15000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided1} alt="undecided1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided2} alt="undecided2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided3} alt="undecided3" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided4} alt="undecided4" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    Restaurant/recipe assistant with randomizer feature that returns a restaurant within a mile radius of your current location.
                    <div className="project-link-container">
                        <a className="project-link" href="https://github.com/lyndenlim/undecided" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="project-link" href="https://undecided-application.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={modal === 2} onHide={() => setModal(null)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>SCHEM△</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Carousel interval={30000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema1} alt="schema1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema2} alt="schema2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema3} alt="schema3" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema4} alt="schema4" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    Video viewing and streaming platform that centralizes topics in technology, programming, and science.
                    <div className="project-link-container">
                        <a className="project-link" href="https://github.com/lyndenlim/schema" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="project-link" href="https://schema-project.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={modal === 3} onHide={() => setModal(null)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Hurdle</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Carousel interval={7000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={hurdle1} alt="hurdle1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={hurdle2} alt="hurdle2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={hurdle3} alt="hurdle3" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    Inspired by WORDLE. Guess the word in 6 tries, dictionary entry of word appears after game concludes.
                    <div className="project-link-container">
                        <a className="project-link" href="https://github.com/lyndenlim/hurdle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="project-link" href="https://lyndenlim.github.io/hurdle/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>
        </motion.div>
    )
}

export default Projects

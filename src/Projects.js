import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import undecided1 from "./images/undecided1.png"
import undecided2 from "./images/undecided2.png"
import undecided3 from "./images/undecided3.png"
import schema1 from "./images/schema1.png"
import schema2 from "./images/schema2.png"
import schema3 from "./images/schema3.png"
import hurdle1 from "./images/hurdle1.png"
import hurdle2 from "./images/hurdle2.png"
import hurdle3 from "./images/hurdle3.png"
import Modal from "react-bootstrap/Modal"
import Carousel from "react-bootstrap/Carousel"
import $ from "jquery"

function Projects() {
    const [undecidedShow, setUndecidedShow] = useState(false);
    const [schemaShow, setSchemaShow] = useState(false);
    const [hurdleShow, setHurdleShow] = useState(false);

    const handleUndecidedClose = () => setUndecidedShow(false);
    const handleUndecidedShow = () => setUndecidedShow(true);
    const handleSchemaClose = () => setSchemaShow(false);
    const handleSchemaShow = () => setSchemaShow(true);
    const handleHurdleClose = () => setHurdleShow(false);
    const handleHurdleShow = () => setHurdleShow(true);

    $(".option").click(function () {
        $(".option").removeClass("active");
        $(this).addClass("active");

    });

    return (
        <div>
            <div className="options">
                <div className="option active" style={{ backgroundImage: `url(${undecided1})` }}>
                    <div className="label">
                        <div className="icon">
                            ¿
                        </div>
                        <div className="info">
                            <div className="main">
                                Undec¿ded
                                <div className="more-button-container">
                                    <button onClick={handleUndecidedShow} className="more-button">More</button>
                                </div>
                            </div>
                            <div className="sub">
                                React JS / Ruby on Rails / PostgreSQL
                            </div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{ backgroundImage: `url(${schema1})` }}>
                    <div className="label">
                        <div className="icon">
                            △
                        </div>
                        <div className="info">
                            <div className="main">
                                SCHEM△
                                <div className="more-button-container">
                                    <button onClick={handleSchemaShow} className="more-button">More</button>
                                </div>
                            </div>
                            <div className="sub">React JS / Ruby on Rails / PostgreSQL</div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{ backgroundImage: `url(${hurdle1})` }}>
                    <div className="label">
                        <div className="icon">
                            H
                        </div>
                        <div className="info">
                            <div className="main">
                                Hurdle
                                &nbsp;
                                <div className="more-button-container">
                                    <button onClick={handleHurdleShow} className="more-button">More</button>
                                </div>
                            </div>
                            <div className="sub">React JS</div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={undecidedShow} onHide={handleUndecidedClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Undec¿ded</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel interval={7000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided1} alt="undecided1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided2} alt="undecided2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={undecided3} alt="undecided3" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    Restaurant/recipe assistant with randomizer feature that returns a restaurant within a mile radius of your current location.
                    <br />
                    <div className="project-link-container">
                        <a className="project-link github" href="https://github.com/lyndenlim/undecided" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a className="project-link website" href="https://undecided-application.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={schemaShow} onHide={handleSchemaClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>SCHEM△</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel interval={7000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema1} alt="schema1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema2} alt="schema2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={schema3} alt="schema3" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    Video viewing and streaming platform that centralizes topics in technology, programming, and science.
                    <br />
                    <div className="project-link-container">
                        <a className="project-link github" href="https://github.com/lyndenlim/schema" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a className="project-link website" href="https://schema-project.herokuapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={hurdleShow} onHide={handleHurdleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Hurdle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel interval={7000}>
                        <Carousel.Item><img className="img-fluid carousel-image" src={hurdle1} alt="hurdle1" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={hurdle2} alt="hurdle2" /></Carousel.Item>
                        <Carousel.Item><img className="img-fluid carousel-image" src={hurdle3} alt="hurdle3" /></Carousel.Item>
                    </Carousel>
                    <hr />
                    Inspired by WORDLE. Guess the word in 6 tries, dictionary entry of word appears after game concludes.
                    <br />
                    <div className="project-link-container">
                        <a className="project-link github" href="https://github.com/lyndenlim/hurdle" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a className="project-link website" href="https://lyndenlim.github.io/hurdle/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} /></a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Projects
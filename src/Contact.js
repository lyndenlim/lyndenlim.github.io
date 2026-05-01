import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileLines, faPaperPlane, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { motion } from "framer-motion"

function Contact() {
    return (
        <motion.div
            className="contact-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
        >
            <div className="section-label">Contact</div>

            <div className="contact-giant">
                <span className="contact-giant-line">LET'S</span>
                <span className="contact-giant-line contact-giant-outline">CONNECT.</span>
            </div>

            <div className="contact-body">
                <div className="contact-info">
                    <p className="contact-subtext">
                        Open to software engineering opportunities — in NYC or remote.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail-row">
                            <FontAwesomeIcon icon={faLocationDot} className="contact-detail-icon" />
                            New York City
                        </div>
                        <div className="contact-detail-row">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-detail-icon" />
                            lyndenlim15@gmail.com
                        </div>
                    </div>
                    <div className="contact-socials">
                        <a className="contact-social-link linkedin"
                            href="https://www.linkedin.com/in/lynden-lim-17b026118/"
                            target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="contact-social-link"
                            href="https://github.com/lyndenlim"
                            target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="contact-social-link"
                            href="https://drive.google.com/file/d/1WIChRNkJUiPiXZ6TOQw-7SFxy29jI6g3/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer" title="Resume">
                            <FontAwesomeIcon icon={faFileLines} />
                        </a>
                    </div>
                </div>

                <div className="contact-form-side">
                    <form
                        action="https://getform.io/f/8f1af7cc-d40c-4bf8-9704-1e2bfb2386b4"
                        method="POST"
                    >
                        <div className="name-email-container">
                            <FloatingLabel label="Name" controlId="floatingName">
                                <Form.Control placeholder="Name" name="name" />
                            </FloatingLabel>
                            <FloatingLabel label="Email" controlId="floatingEmail">
                                <Form.Control placeholder="Email" name="email" type="email" />
                            </FloatingLabel>
                        </div>
                        <div className="contact-me-container">
                            <FloatingLabel label="Message" controlId="floatingMessage">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Message"
                                    name="message"
                                    className="contact-me-body"
                                />
                            </FloatingLabel>
                        </div>
                        <button className="send-message-button" type="submit">
                            Send message &nbsp;<FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact

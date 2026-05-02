import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileLines, faPaperPlane, faLocationDot, faEnvelope, faCircleCheck, faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { motion, AnimatePresence } from "framer-motion"
import { SECTION_MOTION, RESUME_URL } from "./constants"

function Contact() {
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('https://getform.io/f/8f1af7cc-d40c-4bf8-9704-1e2bfb2386b4', {
                method: 'POST',
                body: new FormData(e.target),
            })
            setStatus(res.ok ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    return (
        <motion.div {...SECTION_MOTION} className="contact-wrapper">
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
                            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="contact-social-link"
                            href="https://github.com/lyndenlim"
                            target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="contact-social-link"
                            href={RESUME_URL}
                            target="_blank" rel="noopener noreferrer" aria-label="Resume">
                            <FontAwesomeIcon icon={faFileLines} />
                        </a>
                    </div>
                </div>

                <div className="contact-form-side">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                className="form-feedback form-feedback-success"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <FontAwesomeIcon icon={faCircleCheck} className="form-feedback-icon" />
                                <p className="form-feedback-title">Message sent.</p>
                                <p className="form-feedback-sub">Thanks for reaching out — I'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                initial={false}
                                exit={{ opacity: 0 }}
                            >
                                <div className="name-email-container">
                                    <FloatingLabel label="Name" controlId="floatingName">
                                        <Form.Control placeholder="Name" name="name" required />
                                    </FloatingLabel>
                                    <FloatingLabel label="Email" controlId="floatingEmail">
                                        <Form.Control placeholder="Email" name="email" type="email" required />
                                    </FloatingLabel>
                                </div>
                                <div className="contact-me-container">
                                    <FloatingLabel label="Message" controlId="floatingMessage">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Message"
                                            name="message"
                                            className="contact-me-body"
                                            required
                                        />
                                    </FloatingLabel>
                                </div>
                                {status === 'error' && (
                                    <p className="form-error-msg">
                                        <FontAwesomeIcon icon={faCircleXmark} /> Something went wrong — please try again.
                                    </p>
                                )}
                                <button className="send-message-button" type="submit" disabled={status === 'loading'}>
                                    {status === 'loading'
                                        ? <><FontAwesomeIcon icon={faSpinner} spin /> &nbsp;Sending…</>
                                        : <>Send message &nbsp;<FontAwesomeIcon icon={faPaperPlane} /></>
                                    }
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact

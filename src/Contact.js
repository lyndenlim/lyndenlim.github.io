import { useState } from "react"
import { send } from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileLines, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    function sendEmail(e) {
        e.preventDefault()
        send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            {
                name: name,
                email: email,
                message: message
            },
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
            .then(r => {
                if (r.status === 200) {
                    setName("")
                    setEmail("")
                    setMessage("")
                    setShowSuccess(true)
                    toast.success("Email successfully sent!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                } else {
                    setShowError(true)
                    toast.error("Something went wrong, try again later.", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            })
            .catch(() => {
                setShowError(true)
                toast.error("Something went wrong, try again later.", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }

    return (
        <div >
            <div className="form-container" >
                <div className="contact-header">
                    Contact Me
                </div>
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-6 contact-input">
                            <FloatingLabel label="Name">
                                <Form.Control placeholder="Name" required autoComplete="new-password" value={name} onChange={e => setName(e.target.value)} />
                            </FloatingLabel>
                        </div>
                        <div className="col-6 contact-input">
                            <FloatingLabel label="Email">
                                <Form.Control placeholder="Email" required autoComplete="new-password" value={email} type="email" onChange={e => setEmail(e.target.value)} />
                            </FloatingLabel>
                        </div>
                    </div>
                    <br />
                    <div className="contact-input">
                        <FloatingLabel label="Message">
                            <Form.Control placeholder="Message" as="textarea" style={{ height: "200px" }} required autoComplete="new-password" value={message} onChange={e => setMessage(e.target.value)} />
                        </FloatingLabel>
                    </div>

                    <br />
                    <button className="send-message-button" type="submit">SEND &nbsp;<FontAwesomeIcon icon={faPaperPlane} /></button>
                </form>
            </div>
            <div className="contact-link-container">
                <a className="contact-link linkedin" href="https://www.linkedin.com/in/lynden-lim-17b026118/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="contact-link github-homepage" href="https://github.com/lyndenlim" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a className=" contact-link resume" href="/#"><FontAwesomeIcon icon={faFileLines} /></a>
            </div>

            {showError ?
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                :
                null}
            {showSuccess ?
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                :
                null}
        </div>
    )
}

export default Contact
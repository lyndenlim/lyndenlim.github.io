import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="form-container">
        <div className="contact-header">Get in Touch</div>
        <div>
          <form
            action="https://getform.io/f/8f1af7cc-d40c-4bf8-9704-1e2bfb2386b4"
            method="POST"
          >
            <div className="name-email-container">
              <FloatingLabel label="Name" controlId="floatingInput">
                <Form.Control placeholder="Name" name="name" />
              </FloatingLabel>
              <FloatingLabel label="Email" controlId="floatingInput">
                <Form.Control placeholder="Email" name="email" />
              </FloatingLabel>
            </div>
            <div className="contact-me-container">
              <FloatingLabel label="Message" controlId="floatingInput">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  name="message"
                  className="contact-me-body"
                />
              </FloatingLabel>
            </div>
            <div>
              <button
                className="send-message-button"
                type="submit"
                onClick="submit-form"
              >
                Send &nbsp;
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-link-container">
        <a
          className="contact-link linkedin"
          href="https://www.linkedin.com/in/lynden-lim-17b026118/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="contact-link github-homepage"
          href="https://github.com/lyndenlim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className=" contact-link resume"
          href="https://drive.google.com/file/d/1WIChRNkJUiPiXZ6TOQw-7SFxy29jI6g3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFileLines} />
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;

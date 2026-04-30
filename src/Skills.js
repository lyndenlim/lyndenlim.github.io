import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faInfinity } from "@fortawesome/free-solid-svg-icons"
import { faPython, faAws } from "@fortawesome/free-brands-svg-icons"
import reactImg from "./images/react.png"
import javascript from "./images/javascript.png"
import git from "./images/git.png"
import { motion } from "framer-motion"

const skills = [
    { name: 'React',       type: 'img', src: reactImg },
    { name: 'JavaScript',  type: 'img', src: javascript },
    { name: 'Git',         type: 'img', src: git },
    { name: 'Python',      type: 'fa',  icon: faPython },
    { name: 'AWS',         type: 'fa',  icon: faAws },
    { name: 'Kubernetes',  type: 'url', src: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
    { name: 'Terraform',   type: 'url', src: 'https://cdn.simpleicons.org/terraform/7B42BC' },
    { name: 'CI / CD',     type: 'fa',  icon: faInfinity },
    { name: 'AI / Agentic', type: 'fa', icon: faBrain },
]

function SkillCard({ name, type, src, icon }) {
    return (
        <div className="skill-image-container">
            <div className="skill-icon-wrapper">
                {type === 'fa'
                    ? <FontAwesomeIcon icon={icon} className="skill-fa-icon" />
                    : <img className="skill-image" src={src} alt={name} />
                }
            </div>
            <div className="skill">{name}</div>
        </div>
    )
}

function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="skills-wrapper"
        >
            <h2 className="section-heading">Skills</h2>
            <div className="skill-container">
                {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
            </div>
        </motion.div>
    )
}

export default Skills

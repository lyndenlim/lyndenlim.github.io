import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faInfinity } from "@fortawesome/free-solid-svg-icons"
import { faPython, faAws } from "@fortawesome/free-brands-svg-icons"
import reactImg from "./images/react.png"
import javascript from "./images/javascript.png"
import git from "./images/git.png"
import { motion } from "framer-motion"
import { SECTION_MOTION } from "./constants"

const skills = [
    { name: 'React',        type: 'img', src: reactImg },
    { name: 'JavaScript',   type: 'img', src: javascript },
    { name: 'Python',       type: 'fa',  icon: faPython },
    { name: 'AWS',          type: 'fa',  icon: faAws },
    { name: 'Kubernetes',   type: 'url', src: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
    { name: 'Terraform',    type: 'url', src: 'https://cdn.simpleicons.org/terraform/7B42BC' },
    { name: 'Git',          type: 'img', src: git },
    { name: 'CI / CD',      type: 'fa',  icon: faInfinity },
    { name: 'AI / Agentic', type: 'fa',  icon: faBrain },
]

function SkillRow({ name, type, src, icon, index }) {
    return (
        <motion.div
            className="skill-row"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
        >
            <span className="skill-row-name">{name}</span>
            <span className="skill-row-icon">
                {type === 'fa'
                    ? <FontAwesomeIcon icon={icon} />
                    : <img src={src} alt={name} />
                }
            </span>
        </motion.div>
    )
}

function Skills() {
    return (
        <motion.div {...SECTION_MOTION} className="skills-wrapper">
            <div className="section-label">Skills</div>
            <div className="skill-list">
                {skills.map((skill, i) => (
                    <SkillRow key={skill.name} {...skill} index={i} />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills

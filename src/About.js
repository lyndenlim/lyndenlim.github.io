import { motion } from "framer-motion"

const stats = [
    { key: 'Location',  val: 'New York City',       open: false },
    { key: 'Focus',     val: 'Software Engineering', open: false },
    { key: 'Status',    val: 'Open to Work',         open: true  },
]

function About() {
    return (
        <motion.div
            className="about-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
        >
            <div className="section-label">About</div>

            <div className="about-grid">
                <div className="about-content">
                    <p className="about-lead">
                        Software engineer based in New York City with a background in Mathematics.
                    </p>
                    <p className="about-body">
                        My analytical foundation gives me a strong footing in quantitative thinking
                        and systematic problem resolution. I build across the stack — JavaScript,
                        React, Python, AWS, and Kubernetes — with a particular interest in clean
                        front-end experiences, scalable infrastructure, and AI-driven workflows.
                        <br /><br />
                        Organized, independent, and always keeping an eye on the latest developments
                        in tech and science.
                    </p>
                </div>

                <div className="about-stats">
                    {stats.map(s => (
                        <div className="about-stat" key={s.key}>
                            <span className="stat-key">{s.key}</span>
                            <span className={`stat-val${s.open ? ' stat-val-open' : ''}`}>
                                {s.open && <span className="stat-dot" />}
                                {s.val}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default About

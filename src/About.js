import { motion } from "framer-motion"

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="about-wrapper"
    >
      <h2 className="section-heading">About</h2>
      <div className="about-inner">
        <div className="about-content">
          I'm a software engineer based in New York City with a background in Mathematics.
          My analytical foundation gives me a strong footing in quantitative thinking and systematic problem resolution.
          <br /><br />
          I build across the stack with JavaScript, React, Python, AWS, and Kubernetes — with a particular interest in
          clean front-end experiences, scalable infrastructure, and AI-driven workflows.
          <br /><br />
          I'm organized, independent, and always keeping an eye on the latest developments in tech and science.
        </div>
        <div className="about-aside">
          <div className="about-aside-item">
            <span className="aside-label">Location</span>
            <span className="aside-value">New York City</span>
          </div>
          <div className="about-aside-item">
            <span className="aside-label">Focus</span>
            <span className="aside-value">Software Engineering</span>
          </div>
          <div className="about-aside-item">
            <span className="aside-label">Status</span>
            <span className="aside-value aside-open">Open to Work</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About

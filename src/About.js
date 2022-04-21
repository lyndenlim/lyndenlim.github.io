import { motion } from "framer-motion"

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="about-content">
      I'm a fullstack engineer based in New York City that has a background in Mathematics. My experience has given me a strong foundation in quantative analysis and problem resolution.
      I recently completed Flatiron School's immersive bootcamp where I garnered skills in React, Ruby on Rails, SQL, and HTML/CSS.
      <br />
      <br />
      I am a problem solver, well-organized, and independent. In my free time, I'm often on the look out for the latest developments in tech and science.
      <br />
      <br />
      Currently interested in front end and fullstack development.
    </motion.div>
  )
}

export default About
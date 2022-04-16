import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

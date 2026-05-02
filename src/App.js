import { Route, Routes } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import HomePage from "./HomePage"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </MotionConfig>
  )
}

export default App

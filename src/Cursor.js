import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {
    const [hovering, setHovering] = useState(false)
    const started = useRef(false)
    const mouseX = useMotionValue(-200)
    const mouseY = useMotionValue(-200)

    const dotX  = useSpring(mouseX, { stiffness: 2000, damping: 70 })
    const dotY  = useSpring(mouseY, { stiffness: 2000, damping: 70 })
    const ringX = useSpring(mouseX, { stiffness: 500,  damping: 32 })
    const ringY = useSpring(mouseY, { stiffness: 500,  damping: 32 })

    useEffect(() => {
        const onMove = e => {
            if (!started.current) {
                dotX.set(e.clientX);  dotY.set(e.clientY)
                ringX.set(e.clientX); ringY.set(e.clientY)
                started.current = true
            }
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        const onOver = e => setHovering(
            !!e.target.closest('a, button, [role="button"], .option, .skill-row, .nav-brand, input, textarea, select, label')
        )
        window.addEventListener('mousemove', onMove)
        document.addEventListener('mouseover', onOver)
        return () => {
            window.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseover', onOver)
        }
    }, [mouseX, mouseY, dotX, dotY, ringX, ringY])

    return (
        <>
            <motion.div
                className="cursor-ring"
                style={{ x: ringX, y: ringY }}
                animate={{ rotate: hovering ? 45 : 0, scale: hovering ? 1.5 : 1, opacity: hovering ? 1 : 0.5 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="cursor-dot"
                style={{ x: dotX, y: dotY }}
                animate={{ scale: hovering ? 0 : 1 }}
                transition={{ duration: 0.15 }}
            />
        </>
    )
}

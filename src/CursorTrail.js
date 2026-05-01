import { useEffect, useRef } from 'react'

const TRAIL = 18
const COLOR = '201, 168, 112'

function CursorTrail() {
    const canvasRef = useRef()
    const state = useRef({ points: [], raf: null })

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()

        const onMove = (e) => {
            state.current.points.push({ x: e.clientX, y: e.clientY })
            if (state.current.points.length > TRAIL) state.current.points.shift()
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const pts = state.current.points
            pts.forEach((p, i) => {
                const t = i / TRAIL
                ctx.beginPath()
                ctx.arc(p.x, p.y, 2.5 * t, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${COLOR}, ${t * 0.45})`
                ctx.fill()
            })
            state.current.raf = requestAnimationFrame(draw)
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('resize', resize)
        draw()

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(state.current.raf)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
        />
    )
}

export default CursorTrail

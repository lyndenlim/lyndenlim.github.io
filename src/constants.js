export const SCROLL_DURATION = 400

export const RESUME_URL = "https://drive.google.com/file/d/1WIChRNkJUiPiXZ6TOQw-7SFxy29jI6g3/view?usp=sharing"

export const SECTION_MOTION = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true },
}

function SectionHeading({ number, children }) {
    return (
        <div className="section-heading-wrapper">
            <span className="section-number">{number}</span>
            <h2 className="section-heading">{children}</h2>
        </div>
    )
}

export default SectionHeading

const pillars = [
    {
        icon: "iconoir-compass",
        title: "Strategy & Insight",
        subtitle: "Shaped With Our Clients",
    },
    {
        icon: "iconoir-design-pencil",
        title: "Design & Craft",
        subtitle: "Creative42 Studio",
    },
    {
        icon: "iconoir-community",
        title: "Immersion",
        subtitle: "Working Side By Side",
    },
];

const phases = [
    {
        number: "01",
        progress: 33,
        title: "Immerse",
        subtitle: "Research & discovery into your brand, market, and audience.",
    },
    {
        number: "02",
        progress: 66,
        title: "Create",
        subtitle: "Strategy, storytelling, and design shaped around your angle.",
    },
    {
        number: "03",
        progress: 100,
        title: "Develop",
        subtitle: "Build, launch, and grow across every channel that matters.",
    },
];

const ringStyle = (progress: number) => ({
    background: `conic-gradient(#c8a244 ${progress * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
});

const OurApproachV1 = () => {
    return (
        <div className="our-approach-sec">
            <div className="custom-container">
                <div className="our-approach-header">
                    <span className="our-approach-eyebrow">Our Approach</span>
                    <h2>Our Branding Approach.</h2>
                    <p>
                        Every engagement sits at the intersection of clear strategy, sharp creative
                        craft, and close collaboration with our clients. That&apos;s where Creative42&apos;s
                        sweet spot lives.
                    </p>
                </div>

                <div className="approach-pillars">
                    {pillars.map((pillar) => (
                        <div className="approach-pillar" key={pillar.title}>
                            <span className="approach-pillar-icon">
                                <i className={pillar.icon} />
                            </span>
                            <h3>{pillar.title}</h3>
                            <span className="approach-pillar-subtitle">{pillar.subtitle}</span>
                        </div>
                    ))}
                    <span className="approach-pillars-line" />
                    <span className="approach-sweetspot">
                        <span className="approach-sweetspot-dot" />
                        The Sweet Spot
                    </span>
                </div>

                <div className="approach-process">
                    <span className="approach-process-label">Project Process</span>

                    <div className="approach-phases">
                        {phases.map((phase, index) => (
                            <div className="approach-phase" key={phase.number}>
                                <span className="approach-phase-ring" style={ringStyle(phase.progress)}>
                                    <span className="approach-phase-ring-inner">{phase.number}</span>
                                </span>
                                <h4>{phase.title}</h4>
                                <p>{phase.subtitle}</p>
                                {index < phases.length - 1 && <span className="approach-phase-connector" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurApproachV1;

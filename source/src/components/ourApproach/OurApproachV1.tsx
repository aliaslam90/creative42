import ApproachIllustration from "./ApproachIllustration";

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
                                <ApproachIllustration icon={pillar.icon} />
                            </span>
                            <h3>{pillar.title}</h3>
                            <span className="approach-pillar-subtitle">{pillar.subtitle}</span>
                        </div>
                    ))}
                    <span className="approach-sweetspot">
                        <span className="approach-sweetspot-dot" />
                        The Sweet Spot
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OurApproachV1;

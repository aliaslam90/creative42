const stages = [
    { number: "01", title: "Brand Strategy", subtitle: "Angle Defined" },
    { number: "02", title: "Brand Identity", subtitle: "Belief Expressed" },
    { number: "03", title: "Brand Activation", subtitle: "Belief Behaved" },
];

const BrandingEngagementsV1 = () => {
    return (
        <div className="branding-eng-sec">
            <div className="custom-container">
                <div className="branding-eng-top">
                    <h2 className="branding-eng-heading">
                        Our<br />Branding<br />Engage-<br />ments
                    </h2>

                    <div className="branding-eng-desc">
                        <p>
                            We shape brands with a clear point of view, bringing each client&apos;s core
                            vision to life through a sharper, 42-degree angle. We help deepen connections
                            with existing audiences while attracting new ones, turning a clear angle into
                            meaningful growth.
                        </p>
                        <p>
                            Explore Creative42&apos;s branding process, where strategy drives everything.
                            We combine research, positioning, and creative craft to translate your brand&apos;s
                            vision into an identity that stands out and stands for something bigger.
                        </p>
                    </div>
                </div>

                <div className="branding-eng-stages">
                    {stages.map((stage) => (
                        <div className="branding-eng-stage" key={stage.number}>
                            <span className="branding-eng-number">{stage.number}</span>
                            <h3>{stage.title}</h3>
                            <span className="branding-eng-subtitle">{stage.subtitle}</span>
                        </div>
                    ))}
                </div>
                <div className="branding-eng-divider" />
            </div>
        </div>
    );
};

export default BrandingEngagementsV1;

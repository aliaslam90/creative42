"use client";
import ServicesStackData from "@/assets/jsonData/servicesStack/ServicesStackData.json";
import ServiceIllustration from "./ServiceIllustration";

const ServicesStackV1 = () => {
    return (
        <div className="services-stack-sec" id="services">
            <div className="custom-container">
                <div className="services-stack-heading">
                    <h2>
                        <span className="services-stack-heading-soft">What we do.</span>
                        <span className="services-stack-heading-strong">All under one roof.</span>
                    </h2>
                    <p>
                        Most agencies specialise in one area and hand you off to someone else for the rest.
                        We handle brand, content, product, and marketing under one roof, so nothing gets
                        lost in translation between teams.
                    </p>
                </div>

                <div className="services-stack-list">
                    {ServicesStackData.map((service, index) => (
                        <div
                            className="services-stack-card-wrap"
                            key={service.id}
                            style={{ top: `${96 + index * 28}px`, zIndex: index + 1 }}
                        >
                            <div className="services-stack-card">
                                <div className="services-stack-card-content">
                                    <span className="services-stack-number">{String(index + 1).padStart(2, "0")}</span>
                                    <h3>
                                        <span className="services-stack-label">{service.label}</span>
                                        <span className="services-stack-title">{service.title}</span>
                                    </h3>
                                    <p>{service.description}</p>
                                    <div className="services-stack-tags">
                                        {service.tags.map((tag) => (
                                            <span className="services-stack-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="services-stack-visual">
                                    <ServiceIllustration id={service.id} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesStackV1;

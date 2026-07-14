import Image from "next/image";
import OurWorkFeaturedData from "@/assets/jsonData/ourWork/OurWorkFeaturedData.json";
import OurWorkMoreData from "@/assets/jsonData/ourWork/OurWorkMoreData.json";

const OurWorkV1 = () => {
    return (
        <div className="our-work-sec" id="projects">
            <div className="custom-container">
                <div className="our-work-heading">
                    <h2>
                        Our <span>Work.</span>
                    </h2>
                    <p>A selection of brand, product, and development projects we&apos;ve delivered for real clients.</p>
                </div>

                <div className="our-work-list">
                    {OurWorkFeaturedData.map((project) => (
                        <div className="our-work-card" key={project.id}>
                            <div className="our-work-card-top">
                                <div className="our-work-card-title">
                                    <h3>{project.title} <span>– {project.subtitle}</span></h3>
                                </div>
                                <span className="our-work-year-icon">
                                    <i className="iconoir-arrow-up-right" />
                                </span>
                            </div>

                            <div className="our-work-tags">
                                {project.tags.map((tag) => (
                                    <span className="our-work-tag" key={tag}>{tag}</span>
                                ))}
                                <span className="our-work-tag our-work-year">{project.year}</span>
                            </div>

                            <div className="our-work-media">
                                <div className="our-work-laptop">
                                    <div className="our-work-laptop-screen">
                                        <span className="our-work-laptop-camera" />
                                        <div className="our-work-browser-bar">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <div className="our-work-browser-image">
                                            <Image src={`/assets/images/${project.thumb}`} alt={project.title} width={800} height={520} />
                                        </div>
                                    </div>
                                    <div className="our-work-laptop-base">
                                        <span className="our-work-laptop-notch" />
                                    </div>
                                </div>

                                <div className="our-work-side">
                                    <div className="our-work-side-desc">
                                        <span className="our-work-side-label">About the project</span>
                                        <p>{project.description}</p>
                                        <a href="/contact" className="our-work-side-link">
                                            Start a similar project
                                            <i className="iconoir-arrow-up-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="our-work-more">
                    <span className="our-work-more-label">More Work</span>
                    <h3>Trusted by brands across <span>industries</span></h3>
                    <p>A selection of additional clients we&apos;ve delivered work for.</p>

                    <div className="our-work-more-grid">
                        {OurWorkMoreData.map((item) => {
                            const content = (
                                <span className="our-work-more-content">
                                    <span className="our-work-more-name">{item.name}</span>
                                </span>
                            );

                            return item.href ? (
                                <a
                                    className="our-work-more-item"
                                    key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {content}
                                    <i className="iconoir-arrow-up-right" />
                                </a>
                            ) : (
                                <span className="our-work-more-item" key={item.id}>
                                    {content}
                                </span>
                            );
                        })}
                    </div>

                    <div className="our-work-more-btn-wrap">
                        <a href="/contact" className="our-work-portfolio-btn">
                            Request Full Portfolio
                            <i className="iconoir-arrow-up-right" />
                        </a>
                    </div>

                    <div className="our-work-social">
                        <span className="our-work-social-label">A Sneak Peak Into Our Social Media</span>
                        <div className="our-work-social-list">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="lab la-facebook-f" /> Facebook
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="lab la-instagram" /> Instagram
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="lab la-linkedin-in" /> LinkedIn
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <i className="iconoir-tiktok" /> TikTok
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <i className="lab la-whatsapp" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorkV1;

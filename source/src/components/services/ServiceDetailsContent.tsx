"use client";
import Image from "next/image";
import Union from '@/assets/images/Union.svg';
import AnimatedText from "../animated/AnimatedText";
import Link from "next/link";
import btnArrow from '@/assets/images/btn-arrow.svg';
import useScaleDownAnimation from "@/hooks/useScaleDownAnimation";
interface DataType {
    name?: string;
    thumbFull1?: string;
    thumbFull2?: string;
    text?: string;
    price?: string;
    features?: string[];
}

const ServiceDetailsContent = ({ serviceData }: { serviceData: DataType }) => {
    const { name, text, price, thumbFull1, thumbFull2, features = [] } = serviceData

    const containerRef = useScaleDownAnimation('.scaleDown');


    return (
        <>
            <div className="project-single-wrap service-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            {name}
                        </span>
                        <AnimatedText>
                            Our approach goes 42 degrees beyond the conventional. We blend UAE market insight, creative strategy, and sharp execution to craft brand experiences that are memorable, useful, and built for growth.
                        </AnimatedText>
                    </div>
                </div>
                <div className="project-single-body">
                    <div className="feature-project">
                        <div className="img-box" >
                            <Image src={`/assets/images/${thumbFull1}`} alt="project-single" width={1900} height={925} />
                        </div>
                        <div className="feature-project-infos">
                            <div className="feature-project-info-box project-name">
                                <span className="title">Service :</span>
                                <span className="subtitle">{name}</span>
                            </div>
                            <div className="feature-project-info-box project-description">
                                <span className="title">Description:</span>
                                <span className="subtitle">{text}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <span className="title">Engagement:</span>
                                <span className="subtitle">{price}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <Link href="/contact" className="theme-btn">
                                    GET STARTED
                                    <Image src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-single-content-wrap">
                        <div className="section-header">
                            <span className="section-subtitle">
                                <Image src={Union} alt="icon" />
                                KEY FEATURES
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    We start by defining the angle: the audience tension, market opportunity, brand truth, and creative touchpoints that can move people from attention to action.
                                </AnimatedText>
                                <AnimatedText>
                                    From there, our creative and production teams shape the work with one connected direction so every detail feels intentional.
                                </AnimatedText>
                                <ul>
                                    {features.map(feature => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="full-image" ref={containerRef}>
                            <Image className="scaleDown" src={`/assets/images/${thumbFull2}`} alt="project-single" width={1900} height={925} />
                        </div>
                        <div className="section-header">
                            <span className="section-subtitle">
                                <Image src={Union} alt="icon" />
                                SERVICE BENEFITS
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    Creative42.ai services help your brand move with clarity. By building from a sharper strategic angle, we make your message easier to recognize, easier to trust, and easier to act on.
                                </AnimatedText>
                                <div className="paragraphs">
                                    <p>Our process aligns your visual language, messaging, digital touchpoints, and campaign content around a single direction. That consistency helps UAE audiences understand who you are and why you matter faster.</p>
                                    <p>With tailored creative solutions, you gain stronger market positioning, higher-quality engagement, and a brand presence designed to keep working after launch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;

import contact from '@/assets/images/contact.png';
import btnArrow from '@/assets/images/btn-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <Image className="hero-shape" src={contact} alt="Shape" />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{`"At Creative42.ai, creativity is not linear. It is angular, sharper, and built to reveal the opportunity others miss."`}</p>
                            </div>
                            <div className="author-info">
                                <h4>Creative42.ai</h4>
                                <span>UAE-Based Design & Marketing Agency</span>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title ? title : "Not found Page"}</h2>
                                <h2>Creative42</h2>
                            </div>
                            <Link href="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <Image src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;

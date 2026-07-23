import creativeLogo from "@/assets/images/logocreative.png"
import Image from "next/image";

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                <Image loading="lazy" src={creativeLogo} alt="Creative42 logo" />
            </div>
        </>
    );
};

export default Preloader;

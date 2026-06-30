import unionIcon from "@/assets/images/Union.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import SingleFactV2 from "./SingleFactV2"
import FactData from "@/assets/jsonData/fact/FactData.json"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={unionIcon} alt="About Us" /> About Us
                        </span>
                        <div className="right">
                            <div className="about-story">
                                <h2>Why Creative42.ai?</h2>
                                <AnimatedText>At Creative42.ai, we believe that true creativity begins when you look at things from a different angle, specifically 42 degrees. The name Creative42 is inspired by our commitment to breaking away from conventional perspectives. The number 42 in our identity represents a symbolic angle of creative deviation, a new line of sight that challenges norms and opens doors to innovation.</AnimatedText>
                                <AnimatedText>We do not follow trends, we set them. Our strategies, content, and digital experiences are built with a mindset that leans 42 degrees away from the ordinary. This unique angle reflects how we analyze markets, craft stories, and design campaigns that cut through the noise and speak directly to the human experience.</AnimatedText>
                                <AnimatedText>Creativity is not linear, it is angular. At Creative42.ai, we deliver marketing solutions seen from a smarter, sharper, and more original angle.</AnimatedText>
                            </div>
                        </div>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV2 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;

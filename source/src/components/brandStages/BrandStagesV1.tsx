import Image from "next/image";
import BrandStagesData from "@/assets/jsonData/brandStages/BrandStagesData.json";

const BrandStagesV1 = () => {
    return (
        <div className="brand-stages-sec">
            {BrandStagesData.map((stage, index) => (
                <div
                    className={`brand-stage-row ${index % 2 === 1 ? "brand-stage-row-reverse" : ""}`}
                    key={stage.id}
                >
                    <div className="custom-container">
                        <div className="brand-stage-grid">
                            <div className="brand-stage-content">
                                <span className="brand-stage-number">{stage.number}</span>
                                <h3>
                                    <span className="brand-stage-title">{stage.title}</span>
                                    <span className="brand-stage-subtitle">{stage.subtitle}</span>
                                </h3>
                                <p>{stage.description}</p>
                                <div className="brand-stage-elements">
                                    <span className="brand-stage-elements-label">Foundational Elements:</span>
                                    <ul>
                                        {stage.elements.map((el) => (
                                            <li key={el}>{el}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="brand-stage-media">
                                <Image
                                    src={`/assets/images/${stage.image}`}
                                    alt={stage.title}
                                    width={900}
                                    height={700}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BrandStagesV1;

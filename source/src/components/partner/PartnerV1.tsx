import Image from "next/image";
import PartnerData from "@/assets/jsonData/partner/PartnerData.json";

const PartnerV1 = () => {
    return (
        <>
            <div className="our-partner-sec">
                <span className="partner-label">Clients We Worked With</span>
                <ul>
                    {PartnerData.map((data, index) =>
                        <li key={`${data.id}-${index}`}>
                            {data.logo ? (
                                <Image
                                    src={`/assets/images/${data.logo}`}
                                    alt={data.name}
                                    width={160}
                                    height={56}
                                    loading="lazy"
                                    className="partner-logo"
                                    style={{ height: `${40 * (data.scale ?? 1)}px` }}
                                />
                            ) : (
                                <span>{data.name}</span>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PartnerV1;
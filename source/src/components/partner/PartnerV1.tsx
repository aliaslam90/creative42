import PartnerData from "@/assets/jsonData/partner/PartnerData.json";

const PartnerV1 = () => {
    return (
        <>
            <div className="our-partner-sec">
                <span className="partner-label">Clients We Worked With</span>
                <ul>
                    {PartnerData.map((data, index) =>
                        <li key={`${data.id}-${index}`}><span>{data.name}</span></li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PartnerV1;
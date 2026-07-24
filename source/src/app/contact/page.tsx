import ContactV2 from "@/components/contact/ContactV2";
import FaqV1 from "@/components/faq/FaqV1";
import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import OfficeMapSection from "@/components/officeMap/OfficeMapSection";
import PartnerV1 from "@/components/partner/PartnerV1";

export const metadata = {
    title: "Creative42.ai - Contact"
};

const ContactPage = () => {
    return (
        <>
            <div className="aixor-main contact-page">
                <LayoutV3>
                    <HeroV2
                        title="Contact Us"
                        subtitle="Let's build something at a sharper angle — tell us about your project."
                    />
                    <ContactV2 />
                    <FaqV1 />
                    <PartnerV1 />
                    <OfficeMapSection />
                </LayoutV3>
            </div>
        </>
    );
};

export default ContactPage;
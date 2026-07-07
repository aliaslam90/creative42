import AboutV1 from "@/components/about/AboutV1";
import AwardsV1 from "@/components/awards/AwardsV1";
import ContactV1 from "@/components/contact/ContactV1";
import HeroV1 from "@/components/hero/HeroV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import OurWorkV1 from "@/components/ourWork/OurWorkV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import ProblemsV1 from "@/components/problems/ProblemsV1";
import ServicesStackV1 from "@/components/servicesStack/ServicesStackV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const Home = () => {
    return (
        <>
            <div className="aixor-main">
                <LayoutV1>
                    <HeroV1 />
                    <PartnerV1 />
                    <ProblemsV1 />
                    <AboutV1 />
                    <ServicesStackV1 />
                    <OurWorkV1 />
                    <AwardsV1 />
                    <TestimonialV1 />
                    <ContactV1 />
                </LayoutV1>
            </div>
        </>
    );
};

export default Home;

import ContactV1 from '@/components/contact/ContactV1';
import FaqV1 from '@/components/faq/FaqV1';
import HeroV2 from '@/components/hero/AboutHero';
import LayoutV3 from '@/components/layouts/LayoutV3';
import OurWorkV1 from '@/components/ourWork/OurWorkV1';
import PartnerV1 from '@/components/partner/PartnerV1';

export const metadata = {
    title: "Creative42.ai - Projects"
};

const ProjectsPage = () => {
    return (
        <>
            <div className="aixor-main projects-page">
                <LayoutV3>
                    <HeroV2
                        title="Projects"
                        subtitle="A closer look at the brands, products, and platforms we've shipped."
                    />
                    <OurWorkV1 stackCards />
                    <FaqV1 />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default ProjectsPage;

import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import FeatureV2Data from '@/assets/jsonData/feature/FeatureV2Data.json';
import LayoutV3 from "@/components/layouts/LayoutV3";
import HeroV2 from "@/components/hero/AboutHero";

export const metadata = {
    title: "Creative42.ai - Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = FeatureV2Data.find(project => project.id === parseInt(id))

    return (
        <>
            <div className="aixor-main single-project">
                <LayoutV3>
                    <HeroV2 title="Project Details" />
                    {data && <ProjectDetailsContent projectData={data} />}
                </LayoutV3>
            </div>
        </>
    );
};

export default ProjectDetailsPage;

import ProjectInfo from "../../../components/layout/ProjectInfo.tsx";

export default function ChonkerUtilitiesDescription() {
    const descriptionText = `My repository contains utility and method wrappers that I commonly use. Some scripts are based on publicly available scripts created by other developers and are credited accordingly in the classes.`;
    return (
        <ProjectInfo
            version="N/A"
            renderPipeline="N/A"
            status="N/A"
            description={descriptionText} keyFeatures={[]} technologies={[]}        />
    );
}
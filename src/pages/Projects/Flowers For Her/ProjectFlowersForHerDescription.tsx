import ProjectInfo from "../../../components/layout/ProjectInfo.tsx";

const ProjectFlowersForHerDescription = () => {
    const descriptionText = `Flowers For Her is a short 2D platformer for the Isolation Game Jam 2025. Development time was 1 week.`;

    const keyFeatures = [
        "Coyote Time and Jump Buffering for improved platforming feel",
        "Resettable Interface for level restoration when player dies",
        "2 Endings based on whether the player collects all flowers or not",
        "Dashing Mechanic and unlockable Omni-Dash ability",
        "Wind Zones that affect player movement",
    ];

    const technologies = [
        "2D URP Lights",
        "Timeline",
        "2D Physics"
    ];


    return (
        <ProjectInfo
            version="Unity 6000.1.17f1"
            renderPipeline="URP"
            platform="WebGL"
            status="Released (Free)"
            description={descriptionText}
            keyFeatures={keyFeatures}
            technologies={technologies}
        />
    );
};

export default ProjectFlowersForHerDescription;

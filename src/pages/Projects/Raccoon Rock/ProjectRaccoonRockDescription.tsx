import ProjectInfo from "../../../components/layout/ProjectInfo.tsx";

const ProjectRaccoonRockDescription = () => {
    const descriptionText = `Raccoon Rock is a short 2D stealth game for the Brackey's Game Jam 2025.2. Development time was 1 week.`;

    const keyFeatures = [
        "Proximity and cone based Ai Detection",
        "2D Navmesh pathfinding for enemy patrols",
        "Custom Tween system for UI and indicator effects",
        "2D Physics for clutter bottles and SFX when moved"
    ];

    const technologies = [
        "Unity 6000.1.17f1",
        "URP (Universal Render Pipeline)",
        "Navmesh 2D Extension"
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

export default ProjectRaccoonRockDescription;

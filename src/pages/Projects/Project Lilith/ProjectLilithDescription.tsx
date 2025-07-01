import ProjectInfo from "../../../components/layout/ProjectInfo.tsx";

const ProjectLilithDescription = () => {
    const descriptionText = `This was my first major project that I eventually cancelled due to the massive scope I would have to cover as a solo developer. 
        It was heavily inspired by the original Resident Evil 4 and Resident Evil Revelations. A build currently does not exist due to the large file size 
        of the game (around 15 GB) for what is basically a demo. The videos in the same folder as this doc showcase some of the mechanics and gameplay.`;

    const keyFeatures = [
        "VFX object pooling for weapon effects",
        "Abstract and extendable enemy behavior trees to share logic across enemy types",
        "Root motion-based enemy pathing and attack animations",
        "NavMesh-based enemy pathfinding",
        "Inverse Kinematics for player weapon animations",
        "Dynamic switching between root motion and input-based movement (e.g. for stuns)",
        "Grid-based inventory with item rotation, combination, and equipping",
        "List-based inventory system for key items",
        "Text-based dialogue system with branching dialogue based on world state and quest progression",
        "Raycast-based shooting system and melee detection using OverlapSphere",
    ];

    const technologies = [
        "Unity 2022.3.60f1",
        "URP (Universal Render Pipeline)",
        "Pixel Crushers Dialogue System for dialogue management",
        "JSON for save data serialization",
        "Timeline for cutscenes",
        "Cinemachine for dynamic camera work",
        "Fimpossible Animation Designer and Umotion Pro for animation editing",
    ];


    return (
        <ProjectInfo
            version="Unity 2022.3.60f1"
            renderPipeline="URP"
            status="Cancelled"
            description={descriptionText}
            keyFeatures={keyFeatures}
            technologies={technologies}
        />
    );
};

export default ProjectLilithDescription;

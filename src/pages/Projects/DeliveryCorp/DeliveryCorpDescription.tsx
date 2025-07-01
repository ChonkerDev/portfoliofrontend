import ProjectInfo from "../../../components/layout/ProjectInfo.tsx";

const DeliveryCorpDescription = () => {
    const descriptionText = `A simple first person demo using HDRP. I made it with the idea of mimicking first person survival horror games, particularly Resident Evil 7 and Village. `;

    const keyFeatures = [
        "Visible player legs to improve immersion",
        "Separate leg and hand animations for simplified animator logic",
        "Staged reloading that resumes from the last interrupted point",
        "Hipfire accuracy based on crosshair radius and randomized spread",
        "Dynamic recoil that pushes the camera randomly for immersion",
        "Custom audio zones for environmental sounds (e.g., nature outside)",
        "Ground-type detection using tags for context-sensitive footstep SFX",
        "Animator-based camera bobbing with non-linear motion using animation curves",
        "Holster/draw, aim, and slide mechanics mapped to specific inputs",
    ];

    const technologies = [
        "HDRP volumes for indoor/outdoor lighting differences",
        "HDRP Custom Pass Volume to render body last and prevent wall clipping",
        "Quaternion spine bone manipulation via LateUpdate for look direction",
        "GameObject tags for ground detection with terrain and colliders",
        "The Visual Engine for centralized vegetation material/shader management",
        "Microverse for non-destructive terrain, texturing, and vegetation placement",
        "Animation curves within animator for camera motion effects",
        "Profiler for debugging low performance areas",
    ];

    return (
        <ProjectInfo
            version="6000.0.27f1"
            renderPipeline="HDRP"
            status="Prototype"
            description={descriptionText}
            keyFeatures={keyFeatures}
            technologies={technologies}
        />
    );
};

export default DeliveryCorpDescription;
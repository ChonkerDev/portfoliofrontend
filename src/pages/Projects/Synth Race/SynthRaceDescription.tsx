import ProjectInfo from "../../../components/layout/ProjectInfo.tsx";

const SynthRaceDescription = () => {
    const descriptionText = `Synth Race is an online multiplayer parkour first person racing party game. I collaborated with one other developer for this project. The other developer was only responsible for building levels using the prefabs and scripts I created for level building. I was responsible for developing the entirety of the game and building 8 out of the 20 levels .We met 3 times a week for stand ups, showcasing what we have done and tracked our progress using a trello board.`;

    const keyFeatures = [
        "Online multiplayer with HeathenSteamworks API supporting leaderboards, achievements, and P2P hosting",
        "Networked gameplay logic using Unity NGO",
        "RPCs implemented for attack balls and visual effects (VFX)",
        "Network Variables used to track race times and placements",
        "Unlockable skins and hats synchronized over the network",
        "Grounding system to compensate for Network Transform latency in P2P hosting",
        "Custom inspectors designed to help non-programmer level developers modify and track level systems",
    ];

    const technologies = [
        "HeathenSteamworks API",
        "Unity Netcode for GameObjects (NGO)",
        "Unity RPC (Remote Procedure Calls)",
        "Unity Network Variables",
        "Unity Splines with spline mesh generator for grind rails",
        "P2P hosting network architecture",
        "Custom Unity Editor inspectors",
    ];

    return (
        <ProjectInfo
            version="6000.0.27f1"
            renderPipeline="URP"
            status="Released"
            description={descriptionText}
            keyFeatures={keyFeatures}
            technologies={technologies}
        />
    );
};

export default SynthRaceDescription;

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState, type JSX} from 'react';

export default function Skills() {
    return (
        <Container maxWidth="md" sx={{py: 6}}>
            <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', borderBottom: '2px solid orange', pb: 1}}>
                Unity Development Skills
            </Typography>

            <SkillAccordion title="Gameplay Programming & Systems Design" items={[
                "Designed and implemented responsive player movement, combat, and traversal systems (sprinting, sliding, jumping, climbing)",
                "Created interactive UI and UX systems including HUDs, pause menus, and inventory interfaces",
                "Scripted in-game cutscenes using Unity Timeline with event triggers and Cinemachine",
                "Developed gameplay loops around collectible items, player progression, and unlockable cosmetics",
                "Implemented ability systems including power-ups, status effects, and cooldown mechanics",
                "Designed and tuned gameplay systems for racing, shooting, and platforming mechanics"
            ]}/>

            {/*used cpu slicing for synth race placement detection, check the disance of each player to the next check point each frame, instead of all at once*/}
            {/* FSM = Finite State Machine, basically the states an ai can be in like Wander -> Pursue in Project Lilith */}
            <SkillAccordion
                title="Unity Engine Systems"
                items={[
                    "Scripting API (Coroutines, Serialization, UnityEvents,  subscription patterns, Monobehaviour lifecycle, ScriptableObjects, Scene Management)",
                    "Animation (Animator Controller, Animator API, rootmotion, Final IK, Unity IK, blendtrees, parameters, StateMachineBehaviours, Animation Events, Animation Curves, FBX)",
                    "AI/NPC (NavMesh, pathfinding, obstacle avoidance, behaviour trees, FSMs, steering logic)",
                    "Graphics (URP, basic HDRP, particles, materials, light types, post-processing, Quality Settings) ",
                    "Editor (custom inspectors, custom windows, Gizmos, Prefabs, Prefab variants, project architecture) ",
                    "Audio (AudioSource, AudioMixer, audio zones, reverb zones)",
                    "UI (uGUI, HUD, TextMeshPro, layout groups, Buttons, Sliders, anchoring, event system, input handling)",
                    "Physics (Rigidbody, Colliders, Raycasting, Shapecasting, Physics Materials, Vectors, Quaternions, Physics Layers, Triggers)",
                    <>Optimization (Object Pooling, Profiler, LODs, Occlusion Culling, <Link
                        href="https://thegamedev.guru/unity-performance/cpu-slicing-secrets/" target="_blank"
                        rel="noopener noreferrer">CPU Slicing</Link>)</>,
                    "Other (Cinemachine, Splines, New Input System, Timeline, asset management, Tags)",
                ]}
            />

            <SkillAccordion title="Multiplayer & Networking" items={[
                "Steamworks API (P2P, Steam Relay, Leaderboards, Stats)",
                "P2P session tracking, player state syncing",
                "Unity NGO (NetworkManager, Transport, NetworkObjects, NetworkBehavious, RPCs, Network Variables)",
            ]}/>

            <SkillAccordion title="Tools & Workflow" items={[
                "Git, PlasticSCM, Vercel, CI/CD pipelines",
                "Agile/Scrum, Jira, Trello, Code Reviews"
            ]}/>

            <SkillAccordion title="Languages & Supporting Tech" items={[
                "C# (LINQ, Data Structures, JSON, REST APIs, Tasks)",
                "Animation (Fimpossible Animation Designer, Umotion Pro, Final IK, Magica Cloth )",
                "Java (Spring Boot, Maven, JUnit, Mockito)",
                "JavaScript (Ember.js, React, Vite, Typescript)",
                "SQL & NoSQL",
            ]}/>
        </Container>
    );
}

function SkillAccordion({title, items} : {title: string, items: (string | JSX.Element)[]}) {
    const [expanded, setExpanded] = useState(true);
    return (
        <Accordion disableGutters expanded={expanded} onChange={() => setExpanded(!expanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls={`${title}-content`} id={`${title}-header`}>
                <Typography variant="h6" sx={{fontWeight: 500}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul style={{paddingLeft: '1.5rem', margin: 0}}>
                    {items.map((item, i) => (
                        <li key={i} style={{marginBottom: '0.5rem'}}>
                            <Typography variant="body1" component="span">{item}</Typography>
                        </li>
                    ))}
                </ul>
            </AccordionDetails>
        </Accordion>
    );
}
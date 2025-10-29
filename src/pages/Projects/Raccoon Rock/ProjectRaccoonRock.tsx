import ProjectRaccoonRockDescription from "./ProjectRaccoonRockDescription";
import ProjectLayoutTwoColumn from "../../../components/layout/ProjectLayoutTwoColumn.tsx";
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import SlideFade from "../../../components/animation/SlideFade.tsx";
import {Typography} from "@mui/material";
import {useIsMobile} from "../../../Utils.ts";
import GitHubLink from "../../../components/layout/GitHubLink.tsx";
import ItchIoLink from "../../../components/layout/ItchIoLink.tsx";
import ProjectsRenderLocalVideo from "../../../components/layout/ProjectsRenderLocalVideo.tsx";


export default function ProjectRaccoonRock() {
    const isMobile = useIsMobile();
    const gifUrl = "/Project Gifs/Raccoon Rock/Raccoon Rock.mp4";
    const githubUrl = "https://github.com/ChonkerDev/Brackey-Game-Jam-2025-2";
    const itchIoUrl = "https://chonkerdev.itch.io/brackeys-gamejam";
    const DesktopLeft = () => (
        <div>
            <ProjectsRenderLocalVideo videoUrl={gifUrl}/>
            <div style={{
                marginTop: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem' // space between links
            }}>
                <GitHubLink url={githubUrl}/>
                <ItchIoLink url={itchIoUrl}/>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <ProjectLayoutTwoColumn
            title={"Showcase"}
            left={(<DesktopLeft/>)}
            right={<ProjectRaccoonRockDescription/>}
        />
    );

    const MobileLayout = () => (
        <div style={{padding: '1rem'}}>
            <Typography variant="h4" component="h2" gutterBottom>
                Showcase Raccoon Rock
            </Typography>
            <ProjectsRenderLocalVideo videoUrl={gifUrl}/>
            <GitHubLink url={githubUrl}/>
            <ItchIoLink url={itchIoUrl}/>
            <ProjectRaccoonRockDescription/>
        </div>
    );

    return (<div><SlideFade>
            <ProjectsHeader headertext="Raccoon Rock"/>
            {isMobile ? <MobileLayout/> : <DesktopLayout/>}
        </SlideFade>
        </div>
    );
}
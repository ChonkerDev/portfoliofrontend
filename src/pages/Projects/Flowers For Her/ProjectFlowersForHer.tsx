import ProjectLayoutTwoColumn from "../../../components/layout/ProjectLayoutTwoColumn.tsx";
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import SlideFade from "../../../components/animation/SlideFade.tsx";
import {Typography} from "@mui/material";
import ProjectFlowersForHerDescription from "./ProjectFlowersForHerDescription.tsx";
import {useIsMobile} from "../../../Utils.ts";
import ItchIoLink from "../../../components/layout/ItchIoLink.tsx";
import GitHubLink from "../../../components/layout/GitHubLink.tsx";
import ProjectsRenderLocalVideo from "../../../components/layout/ProjectsRenderLocalVideo.tsx";


export default function ProjectFlowersForHer() {
    const isMobile = useIsMobile();
    const gifUrl = "/Project Gifs/Flowers For Her/Flowers For Her.mp4";
    const githubUrl = "https://github.com/ChonkerDev/Isolation-Game-Jam";
    const itchIoUrl = "https://lunchbox2634.itch.io/flowers-for-her";
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
            right={<ProjectFlowersForHerDescription/>}
        />
    );

    const MobileLayout = () => (
        <div style={{padding: '1rem'}}>
            <Typography variant="h4" component="h2" gutterBottom>
                Showcase Flowers For Her
            </Typography>
            <ProjectsRenderLocalVideo videoUrl={gifUrl}/>
            <GitHubLink url={githubUrl}/>
            <ItchIoLink url={itchIoUrl}/>
            <ProjectFlowersForHerDescription/>
        </div>
    );

    return (<div><SlideFade>
            <ProjectsHeader headertext="Flowers For Her"/>
            {isMobile ? <MobileLayout/> : <DesktopLayout/>}
        </SlideFade>
        </div>
    );
}
import SlideFade from '../../../components/animation/SlideFade.tsx';
import {Typography} from "@mui/material";
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import ProjectsRenderYoutube from "../../../components/layout/ProjectsRenderYoutube.tsx";
import {useIsMobile} from "../../../Utils.ts";
import ProjectLayoutTwoColumn from "../../../components/layout/ProjectLayoutTwoColumn.tsx";
import ProjectLilithDescription from "./ProjectLilithDescription.tsx";


export default function ProjectProjectLilith() {
    const isMobile = useIsMobile();

    const DesktopLeft = () => (<div>
            <ProjectsRenderYoutube videoId="wyZAEKPqAH8"/>
        </div>
    );

    const DesktopLayout = () => (
        <ProjectLayoutTwoColumn
            title={"Showcase Project Lilith"}
            left={(<DesktopLeft/>)}
            right={<ProjectLilithDescription/>}
        />
    );

    const MobileLayout = () => (
        <div style={{padding: '1rem'}}>
            <Typography variant="h4" component="h2" gutterBottom>
                Showcase Project Lilith
            </Typography>
            <ProjectsRenderYoutube videoId="vxo2ptucApA"/>
            <ProjectLilithDescription/>
        </div>
    );

    return (<div><SlideFade>
            <ProjectsHeader headertext="Project Lilith"/>
            {isMobile ? <MobileLayout/> : <DesktopLayout/>}
        </SlideFade>
        </div>
    );
}


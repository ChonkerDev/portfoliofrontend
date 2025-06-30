import SlideFade from '../../components/animation/SlideFade';
import {Typography} from "@mui/material";
import ProjectsHeader from "../../components/layout/ProjectsHeader.tsx";
import ProjectsRenderYoutube from "../../components/layout/ProjectsRenderYoutube.tsx";


export default function ProjectProjectLilith() {
    return (<SlideFade>
        <ProjectsHeader headertext="Project Lilith"/>
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%', // or a fixed height if needed
            }}
        >
            <div style={{flex: 1, padding: '1rem'}}> {/* Left side */}
                <Typography variant="h4" component="h2" gutterBottom>
                    Showcase Project Lilith
                </Typography>
                <ProjectsRenderYoutube videoId="wyZAEKPqAH8"/>
            </div>
            <div style={{flex: 1, padding: '1rem', backgroundColor: '#d0d0d0'}}>
                Right side
            </div>
        </div>
    </SlideFade>);
}


import SlideFade from "../../components/animation/SlideFade.tsx";
import ProjectsHeader from "../../components/layout/ProjectsHeader.tsx";
import {Typography} from "@mui/material";
import ProjectsRenderYoutube from "../../components/layout/ProjectsRenderYoutube.tsx";



export default function ProjectDeliveryCorp() {
    return (<SlideFade>
        <ProjectsHeader headertext="Delivery Corp"/>

        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%', // or a fixed height if needed
            }}
        >
            <div style={{flex: 1, padding: '1rem'}}> {/* Left side */}
                <Typography variant="h4" component="h2" gutterBottom>
                    Showcase Delivery Corp
                </Typography>
                <ProjectsRenderYoutube videoId="vxo2ptucApA" />
            </div>
            <div style={{flex: 1, padding: '1rem', backgroundColor: '#d0d0d0'}}>
                Right side
            </div>
        </div>
    </SlideFade>);
}
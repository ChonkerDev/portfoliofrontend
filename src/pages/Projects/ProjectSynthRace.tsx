import SlideFade from '../../components/animation/SlideFade';
import {Typography} from "@mui/material";
import ProjectsHeader from "../../components/layout/ProjectsHeader.tsx";
import ProjectsRenderYoutube from "../../components/layout/ProjectsRenderYoutube.tsx";

const steamlink = "https://store.steampowered.com/widget/2944360/";

export default function ProjectSynthRace() {
    return <SlideFade>
        <ProjectsHeader headertext="Synth Race"/>

        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%', // or a fixed height if needed
            }}
        >
            <div style={{flex: 1, padding: '1rem'}}> {/* Left side */}
                <Typography variant="h4" component="h2" gutterBottom>
                    Synth Race Trailer
                </Typography>

                <ProjectsRenderYoutube videoId="F8sk8UB1kxM"/>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
                    <iframe
                        src={steamlink}
                        frameBorder="0"
                        width="646"
                        height="190"
                    ></iframe>
                </div>
            </div>
            <div style={{flex: 1, padding: '1rem', backgroundColor: '#d0d0d0'}}>
                Right side
            </div>
        </div>
    </SlideFade>
}


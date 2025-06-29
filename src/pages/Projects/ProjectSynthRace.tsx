import SlideFade from '../../components/animation/SlideFade';
import {Typography} from "@mui/material";

const steamlink = "https://store.steampowered.com/widget/2944360/";
const videoUrl = "https://www.youtube.com/embed/F8sk8UB1kxM";

export default function ProjectSynthRace() {
    return <SlideFade>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <iframe
                src={steamlink}
                frameBorder="0"
                width="646"
                height="190"
            ></iframe>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Synth Race Trailer
            </Typography>
            <div style={{position: 'relative', width: '40%', paddingTop: '22.5%' /* 16:9 aspect ratio */}}>
                <iframe
                    src={videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0
                    }}
                ></iframe>
            </div>
        </div>
    </SlideFade>

}
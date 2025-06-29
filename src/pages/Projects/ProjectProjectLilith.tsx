import SlideFade from '../../components/animation/SlideFade';
import {Typography} from "@mui/material";

const videoUrl = "https://www.youtube.com/embed/wyZAEKPqAH8";

export default function ProjectProjectLilith() {
    return <SlideFade>
        <div>
            <div style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',      // <-- this ensures horizontal centering
                justifyContent: 'center',  // optional if you want vertical centering too
                textAlign: 'center',}}>
                <h2>Header</h2>
                <p>Details</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                height: '100vh',
                flexDirection: 'column'
            }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Showcase Project Lilith
                </Typography>
                <div style={{ position: 'relative', width: '40%', paddingTop: '22.5%' /* 16:9 aspect ratio */ }}>
                    <iframe
                        src={videoUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
    </div>
</SlideFade>

}
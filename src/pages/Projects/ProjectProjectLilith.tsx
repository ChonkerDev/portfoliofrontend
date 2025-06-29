import SlideFade from '../../components/animation/SlideFade';
import {Typography} from "@mui/material";



export default function ProjectProjectLilith() {
    return (<SlideFade>
        <div>
            {renderHeader()}
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
                {renderVideo()}
            </div>
        </div>
    </SlideFade>);
}

const renderHeader = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h2>Header</h2>
            <p>Details</p>
        </div>
    );
}

const renderVideo = () => {
    const videoUrl = "https://www.youtube.com/embed/wyZAEKPqAH8";
    return (<div style={{position: 'relative', width: '40%', paddingTop: '22.5%' /* 16:9 aspect ratio */}}>
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
    </div>);
}
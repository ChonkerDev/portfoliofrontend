import SlideFade from '../../components/animation/SlideFade';
import {Typography} from "@mui/material";

const videoUrl = "https://f005.backblazeb2.com/file/ChonkerPortfolio/Showcase+Project+Lilith.mp4";

export default function ProjectProjectLilith() {
    return <SlideFade>
        <div>
            <div style={{justifyItems: 'center'}}>
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
            <video
                width="40%"
                controls
                preload="metadata"
                poster="https://f000.backblazeb2.com/file/your-bucket/thumb.jpg"
                autoPlay={false}
                style={{border: '4px solid red'}}
            >
                <source src={videoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</SlideFade>

}
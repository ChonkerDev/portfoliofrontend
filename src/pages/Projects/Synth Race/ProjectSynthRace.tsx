import SlideFade from '../../../components/animation/SlideFade.tsx';
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import ProjectsRenderYoutube from "../../../components/layout/ProjectsRenderYoutube.tsx";
import {useIsMobile} from '../../../Utils.ts';
import SynthRaceDescription from "./SynthRaceDescription.tsx";
import ProjectLayoutTwoColumn from "../../../components/layout/ProjectLayoutTwoColumn.tsx";
import {Typography} from '@mui/material';

const steamlink = "https://store.steampowered.com/widget/2944360/";

export default function ProjectSynthRace() {
    const isMobile = useIsMobile();

    const MobileLayout = () => (
        <div style={{padding: '1rem'}}>
            <Typography variant="h4" component="h2" gutterBottom>
                Trailer
            </Typography>

            <ProjectsRenderYoutube videoId="F8sk8UB1kxM"/>

            <div style={{display: 'flex', justifyContent: 'left', paddingTop: '2rem'}}>
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        minHeight: '200px',
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        src={steamlink}
                        frameBorder="0"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: '0',
                        }}
                    ></iframe>
                </div>
            </div>

            <div style={{padding: '1rem', marginTop: '1rem'}}>
                <SynthRaceDescription/>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <ProjectLayoutTwoColumn
            title={"Trailer"}
            left={(
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <ProjectsRenderYoutube videoId="F8sk8UB1kxM"/>
                    <iframe
                        src={steamlink}
                        frameBorder="0"
                        width="100%"
                        height="190"
                        title="Steam Widget"
                    />
                </div>
            )}
            right={<SynthRaceDescription/>}
        />
    )


    return (
        <SlideFade>
            <ProjectsHeader headertext="Synth Race"/>
            {isMobile ? <MobileLayout/> : <DesktopLayout/>}
        </SlideFade>
    );
}

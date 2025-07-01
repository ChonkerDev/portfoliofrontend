import SlideFade from "../../../components/animation/SlideFade.tsx";
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import {Link, Typography} from "@mui/material";
import ProjectsRenderYoutube from "../../../components/layout/ProjectsRenderYoutube.tsx";
import DeliveryCorpDescription from "./DeliveryCorpDescription.tsx";
import {useIsMobile} from "../../../Utils.ts";
import ProjectLayoutTwoColumn from "../../../components/layout/ProjectLayoutTwoColumn.tsx";


export default function ProjectDeliveryCorp() {
    const isMobile = useIsMobile();

    const RenderControls = () => (
        <div>
            <Link
                href="https://drive.google.com/file/d/15QHgLbkeFnPQU7wFJsAe41WJLoMavLMr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{paddingTop: '1rem'}}
            >
                Download
            </Link>
            <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Controls</h3>
            <ul style={{paddingLeft: '1.5rem'}}>
                <li><strong>Movement:</strong> WASD</li>
                <li><strong>Sprint:</strong> Shift</li>
                <li><strong>Slide:</strong> Shift + C while moving</li>
                <li><strong>Holster/Draw Weapon:</strong> 2</li>
                <li><strong>Aim:</strong> Hold Right Click</li>
                <li><strong>Interact with Door Knob:</strong> F</li>
                <li><strong>Exit:</strong> Escape</li>
            </ul>
        </div>
    );

    const DesktopLeft = () => (
        <div>
            <ProjectsRenderYoutube videoId="vxo2ptucApA"/>
            <RenderControls/>
        </div>

    );

    const DesktopLayout = () => (
        <ProjectLayoutTwoColumn
            title={"Showcase Delivery Corp"}
            left={(<DesktopLeft/>)}
            right={<DeliveryCorpDescription/>}
        />
    );

    const MobileLayout = () => (
        <div style={{padding: '1rem'}}>
            <Typography variant="h4" component="h2" gutterBottom>
                Showcase Delivery Corp
            </Typography>
            <ProjectsRenderYoutube videoId="vxo2ptucApA"/>
            <DeliveryCorpDescription/>
        </div>
    );
    return (<div><SlideFade>
            <ProjectsHeader headertext="Delivery Corp"/>
            {isMobile ? <MobileLayout/> : <DesktopLayout/>}


        </SlideFade>
        </div>
    );
}
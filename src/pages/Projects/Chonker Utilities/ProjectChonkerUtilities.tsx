import {useIsMobile} from "../../../Utils.ts";
import SlideFade from "../../../components/animation/SlideFade.tsx";
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import ProjectsRenderYoutube from "../../../components/layout/ProjectsRenderYoutube.tsx";
import ProjectLayoutTwoColumn from "../../../components/layout/ProjectLayoutTwoColumn.tsx";
import {Typography} from "@mui/material";
import ChonkerUtilitiesDescription from "./ChonkerUtilitiesDescription.tsx";
import GitHubLink from "../../../components/layout/GitHubLink.tsx";

const ProjectChonkerUtilities = () => {

    const isMobile = useIsMobile();
    const githubUrl = "https://github.com/ChonkerDev/Chonker-Utilies"
    const DesktopLeft = () => (
        <div>
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
            >
                <img
                    src="/Project Gifs/Chonker Utilities/chonker utilities.png"
                    alt="GitHub repository for Chonker Utilities"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                    }}
                />
            </a>
            <GitHubLink url={githubUrl}/>
        </div>

    );

    const DesktopLayout = () => (
        <ProjectLayoutTwoColumn
            title={"Chonker Utilities"}
            left={(<DesktopLeft/>)}
            right={<ChonkerUtilitiesDescription/>}
        />
    );

    const MobileLayout = () => (
        <div style={{padding: '1rem'}}>
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
            >
                <img
                    src="/Project Gifs/Chonker Utilities/chonker utilities.png"
                    alt="GitHub repository for Chonker Utilities"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                    }}
                />
            </a>
            <GitHubLink url={githubUrl}/>
            <ChonkerUtilitiesDescription/>
        </div>
    );

    return (<div><SlideFade>
            <ProjectsHeader headertext="Chonker Utilities"/>
            {isMobile ? <MobileLayout/> : <DesktopLayout/>}


        </SlideFade>
        </div>
    );
};

export default ProjectChonkerUtilities;
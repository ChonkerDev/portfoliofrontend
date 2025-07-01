import {Link, Outlet} from "react-router-dom";
import {useIsMobile} from "../Utils.ts";

export default function Projects() {
    const isMobile = useIsMobile();

    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                Projects
            </h1>
            <nav style={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
                alignItems: 'center',
                whiteSpace: 'nowrap',
            }}>
                <Link to="projectoverview" style={OverviewlinkStyle}>Overview</Link>
            </nav>
            {isMobile ? null : (
                <nav style={{
                    display: 'flex',
                    gap: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    whiteSpace: 'nowrap',
                    flexWrap: 'wrap'
                }}>
                    <Link to="projectsynthrace" style={ProjectlinkStyle}>Synth Race</Link>
                    <Link to="projectprojectlilith" style={ProjectlinkStyle}>Project Lilith</Link>
                    <Link to="projectdeliverycorp" style={ProjectlinkStyle}>Delivery Corp</Link>
                </nav>
            )}

            <div style={{padding: 20, overflowX: 'hidden'}}>
                <Outlet/>
            </div>
        </div>
    );
}

const OverviewlinkStyle = {
    fontSize: '2rem',
    padding: '10px 20px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#ffac6e',
};

const ProjectlinkStyle = {
    fontSize: '1.5rem',
    padding: '10px 20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffac6e',
};

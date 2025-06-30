import {Link, Outlet} from "react-router-dom";

export default function Projects() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Projects
            </h1>
            <nav style={{ display: 'flex', gap: 20, justifyContent: 'center', padding: 20,  }}>
                <Link to="projectoverview" style={linkStyle}>Overview</Link>
                <Link to="projectsynthrace" style={linkStyle}>Synth Race</Link>
                <Link to="projectprojectlilith" style={linkStyle}>Project Lilith</Link>
                <Link to="projectdeliverycorp" style={linkStyle}>Delivery Corp</Link>
            </nav>
            <div style={{ padding: 20, overflowX: 'hidden' }}>
                <Outlet />
            </div>
        </div>
    );
}

const linkStyle = {
    fontSize: '1.5rem',
    padding: '10px 20px',
    fontWeight: 'bold',
    textDecoration: 'none', // Optional: remove underline
    color: '#ffac6e',         // Optional: adjust to your color theme
};

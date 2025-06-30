const ProjectsHeader = ({headertext}: { headertext: string }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h1>{headertext}</h1>
        </div>
    );
}

export default ProjectsHeader;
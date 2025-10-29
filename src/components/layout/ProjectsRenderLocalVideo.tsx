const ProjectsRenderLocalVideo = ({videoUrl}: { videoUrl: string }) => {
    return (<div style={{position: 'relative', width: '100%'}}>
        <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'contain',
                display: 'block',
            }}
        />
    </div>);
}

export default ProjectsRenderLocalVideo;
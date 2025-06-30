const ProjectsRenderYoutube = ({videoId}: { videoId: string }) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (<div style={{position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%'}}>
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

export default ProjectsRenderYoutube;
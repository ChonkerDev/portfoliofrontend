type ProjectInfoProps = {
    version: string;
    renderPipeline: string;
    status: string;
    description: string;
    keyFeatures: string[];
    technologies: string[];
};

export default function ProjectInfo({ version, renderPipeline, status, description,   keyFeatures,
                                        technologies }: ProjectInfoProps) {

    return (
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
            <p><strong>Version:</strong> {version}</p>
            <p><strong>Render Pipeline:</strong> {renderPipeline}</p>
            <p><strong>Status:</strong> {status}</p>

            <p>{description}</p>

            {keyFeatures.length > 0 && (
                <>
                    <h3>Key Features</h3>
                    <ul>
                        {keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </>
            )}

            {technologies.length > 0 && (
                <>
                    <h3>Technologies & Systems</h3>
                    <ul>
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
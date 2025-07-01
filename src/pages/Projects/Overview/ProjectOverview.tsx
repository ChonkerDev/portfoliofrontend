import SlideFade from '../../../components/animation/SlideFade.tsx';
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import { Link } from 'react-router-dom';


export default function ProjectOverview() {
    {/*const isMobile = useIsMobile();*/}

    return <SlideFade>
        <ProjectsHeader headertext="Overview"/>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                width: '100%',
                padding: '1rem',
            }}
        >
            {items.map((item, index) => (
                <Card key={index} title={item.title} image={item.imagesrc} link={item.link}/>
            ))}
        </div>
    </SlideFade>
}

const items = [
    {
        title: 'Synth Race',
        imagesrc: '/Project Gifs/Synth Race/Synth Race.mp4',
        link: '/projects/projectsynthrace'
    },
    {
        title: 'Project Lilith',
        imagesrc: '/Project Gifs/Project Lilith/Project Lilith.mov',
        link: '/projects/projectprojectlilith'
    },
    {
        title: 'Delivery Corp',
        imagesrc: '/Project Gifs/Delivery Corp/Delivery Corp.mp4',
        link: '/projects/projectdeliverycorp'
    },
    {
        title: 'Chonker Utilities',
        imagesrc: '/Project Gifs/Chonker Utilities/chonker utilities.png',
        link: '/projects/chonkerutilies'
    }
];

function Card({ title, image, link }: { title: string; image: string; link: string }) {
    const isVideo = /\.(mp4|webm|ogg|mov|mkv)$/i.test(image);

    return (
        <Link
            to={link}
            style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                borderRadius: '8px',
                overflow: 'hidden',
                width: '100%',
                minWidth: '300px',
                maxWidth:'800px'
            }}
        >
            <div
                style={{
                    backgroundColor: '#b96d2f',
                    padding: '1rem',
                    textAlign: 'center',
                    borderRadius: '8px',
                }}
            >
                <h3
                    style={{
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '1rem',
                    }}
                >
                    {title}
                </h3>

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '56.25%',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginTop: '0.5rem',
                    }}
                >
                    {isVideo ? (
                        <video
                            src={image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    )}
                </div>
            </div>
        </Link>
    );
}


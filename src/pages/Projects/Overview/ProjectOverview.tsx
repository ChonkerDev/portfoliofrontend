import SlideFade from '../../../components/animation/SlideFade.tsx';
import ProjectsHeader from "../../../components/layout/ProjectsHeader.tsx";
import { Link } from 'react-router-dom';
import {useIsMobile} from "../../../Utils.ts";

export default function ProjectOverview() {
    const isMobile = useIsMobile();

    return <SlideFade>
        <ProjectsHeader headertext="Overview"/>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: '1rem',
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
    return <Link
        to={link}
        style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
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
                    fontSize: '1rem', // or smaller if needed
                }}
            >
                {title}
            </h3>
            {/\.(mp4|webm|ogg|mov|mkv)$/i.test(image) ? (
                <video
                    src={image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                    }}
                />
            ) : (
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                    }}
                />
            )}
        </div>
    </Link>
        }


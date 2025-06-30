import SlideFade from '../../components/animation/SlideFade';
import ProjectsHeader from "../../components/layout/ProjectsHeader.tsx";
import { Link } from 'react-router-dom';

export default function ProjectOverview() {
    return <SlideFade>
        <ProjectsHeader headertext="Overview"/>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal-width columns
                gap: '1rem', // space between items
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
    }
];

function Card({title, image, link}) {
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
            <h3 style={{margin: 0}}>{title}</h3>
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
        </div>
    </Link>
        }


import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import HomeFooter from './HomeFooter.tsx';

export default function Home() {
  return <div>
    <div style={{
      width: '95%',          // or 95%, or '100%' with maxWidth
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1rem',
      boxSizing: 'border-box'
    }}>
      <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center'}}>
        Home
      </h1>
      <h2 style={{fontSize: '2rem', textAlign: 'center'}}>Unity Programmer</h2>

      <p style={{fontSize: '1.5rem', textAlign: 'left'}}>
        I'm Tim Harrell, a certified Unity programmer working under the alias ChonkerDev, based in Chicago, IL.
      </p>
      <p style={{textAlign: 'left'}}>
        With a combined 7 years of programming experience in Unity and web development, I specialize in building
        gameplay systems and UI from artist assets. I'm passionate
        about creating fluid, accessible, and engaging user experiences — from intuitive 2D interfaces to responsive 3D
        player controls and intelligent AI systems.
      </p>
      <p style={{textAlign: 'left'}}>
        Most recently, I created and released the online multiplayer obstacle course game <b>Synth Race</b>. I’ve also
        built a variety of other gameplay demos and prototypes exploring unique mechanics and systems. If interested, please check the projects section for more details.
      </p>
    </div>

    <HomeFooter />
  </div>;
}
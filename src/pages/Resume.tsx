import {Document, Page, pdfjs} from "react-pdf";
import resumePdf from '/Timothy Harrell Resume - Contact Removed.pdf'
import {useEffect, useRef, useState} from "react";
import certpdf from '/Unity Programmer certificate Official.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; /*{copied from node_modules to public due to worker mismatch version from default website}*/


export default function Resume() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(800);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (<div ref={containerRef} style = {{width: '100%', maxWidth: '800px', margin: '0 auto' }} >
            <h1 style={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                Resume
            </h1>

            <div style={{
                textAlign: 'center',
                margin: '20px 0',
                fontSize: '1.25rem', // Larger text
            }}>
                <a href="/Timothy Harrell Resume - Contact Removed.pdf" download style={{textDecoration: 'none'}}>
                    <button>Download Resume</button>
                </a>
                <a href="/Unity Programmer certificate Official.pdf" download style={{textDecoration: 'none'}}>
                    <button>Download Certification</button>
                </a>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%'}}>
                <Document file={resumePdf}>
                    <Page
                        pageNumber={1}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                    />
                </Document>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Document file={certpdf}>
                    <Page
                        pageNumber={1}
                        width={containerWidth} // Adjust width to fit your layout
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                    />
                </Document>
            </div>

        </div>
    );
}

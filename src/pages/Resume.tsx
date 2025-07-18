import {Document, Page, pdfjs} from "react-pdf";
import resumePdf from '/Timothy Harrell Resume - Contact Removed.pdf'
import {useEffect, useRef, useState} from "react";
import certpdf from '/Unity Programmer certificate Official.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'; /*{copied from node_modules to public due to worker mismatch version from default website}*/
const resumePath = "/Timothy Harrell Resume - Contact Removed.pdf";
const certificatePath = "/Unity Programmer certificate Official.pdf";

export default function Resume() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(800);
    const [numPages, setNumPages] = useState<number | null>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

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
                <a href={resumePath} download style={{textDecoration: 'none'}}>
                    <button>Download Resume</button>
                </a>
                <a href={certificatePath} download style={{textDecoration: 'none'}}>
                    <button>Download Certification</button>
                </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (_, index) => (
                        <div
                            key={`page_${index + 1}`}
                            style={{
                                marginBottom: '2px',
                                borderBottom: '1px solid #eee',
                            }}
                        >
                            <Page
                                pageNumber={index + 1}
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                            />
                        </div>
                    ))}
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

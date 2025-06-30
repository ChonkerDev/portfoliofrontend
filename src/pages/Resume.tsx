import {Document, Page} from "react-pdf";
import resumePdf from '/Timothy Harrell Resume - Contact Removed.pdf'

export default function Resume() {
    return (<div>
            <h1 style={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
                Resume
            </h1>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%'}}>
                <Document file={resumePdf}>
                    <Page
                        pageNumber={1}
                        width={800} // Adjust width to fit your layout
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                    />
                </Document>
            </div>
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

        </div>
    );
}

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '../style/Resume.css';

export default function Resume() {
  return (
    <div className='container'>
      <Document file='/resume.pdf'>
        <Page pageNumber={1}></Page>
      </Document>
    </div>
  );
}

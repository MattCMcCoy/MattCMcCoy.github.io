import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function Resume() {
  return (
    <div className='container'>
      <Document file='/resume.pdf'>
        <Page pageNumber={1}></Page>
      </Document>
    </div>
  );
}

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from 'reactstrap';

export default function Resume() {
  return (
    <div className='space-y-5'>
      <div className='container space-y-5'>
        <Document file='/resume.pdf'>
          <Page pageNumber={1}></Page>
        </Document>
        <Button
          href={'/resume.pdf'}
          target={'_blank'}
          className='m-auto w-40 mt-1 block'
          download
        >
          Download
        </Button>
      </div>
    </div>
  );
}

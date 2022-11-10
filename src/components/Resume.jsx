import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '../style/Resume.css';

export class Resume extends Component {
  static displayName = Resume.name;

  render() {
    return (
      <div className='container'>
        <Document file='/resume.pdf'>
          <Page pageNumber={1}></Page>
        </Document>
      </div>
    );
  }
}

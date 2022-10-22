import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import {NavMenu} from "./NavMenu.js";
import './Styling/Resume.css'

export class Resume extends Component {
  static displayName = Resume.name;

  render() {
    // Maybe make a dark mode resume for dark mode? :)
    return (
        <div>
        <NavMenu/>
        <Document file={'/resume.pdf'}> 
        <Page pageNumber={1}>
        </Page> 
        </Document>
        </div>
    );
  }
}

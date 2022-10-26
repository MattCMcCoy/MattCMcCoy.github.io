import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Styling/Resume.css";
import { useSharedTheme } from "./component-parts/PageTheme.js";

export const ResumeHref = "#/resume";

function ChooseResume() {
  const { checkedState } = useSharedTheme();
  return (
    <Document file={checkedState ? "/resume-dark.pdf" : "/resume.pdf"}>
      <Page pageNumber={1}></Page>
    </Document>
  );
}

export class Resume extends Component {
  static displayName = Resume.name;

  render() {
    return (
      <div className="container">
        <ChooseResume />
      </div>
    );
  }
}

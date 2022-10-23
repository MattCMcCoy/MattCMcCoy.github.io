import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { NavMenu } from "./NavMenu.js";
import "./Styling/Resume.css";
import { useSharedTheme } from "./component-parts/PageTheme.js";

function ChooseResume() {
  const { checkedState } = useSharedTheme();
  return (
    <div>
      <NavMenu />
      <Document file={checkedState ? "/resume-dark.pdf" : "/resume.pdf"}>
        <Page pageNumber={1}></Page>
      </Document>
    </div>
  );
}

export class Resume extends Component {
  static displayName = Resume.name;

  render() {
    return <ChooseResume />;
  }
}

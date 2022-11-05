import React, { Component } from "react";
import { renderAstronaut } from "./component-parts/Astronaut";
import "../style/AboutMe.css";

export class AboutMe extends Component {
  static displayName = AboutMe.name;

  render() {
    return (
      <div className="aboutme">
        {renderAstronaut()}
        {"This page is currently in progress check back later! :)"}
      </div>
    );
  }
}

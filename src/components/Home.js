import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import drone from "./Images/Drone-Video.mp4";
import "./Styling/Home.css";

const welcomeMessage = [
  "Hey My Name Is Matt! :)",
  2000,
  "",
  20,
  "Welcome To My Life.",
  2000,
  "",
  20,
];

export const HomeHref = "/";

const videoContainer = (
  <div className="flexbox-container">
    <video
      className="header_video"
      id="dronevideo"
      src={drone}
      type="video/mp4"
      loop
      muted
      autoPlay
      playsInline
      controls={false}
    />
    <div class="centered">
      <TypeAnimation
        sequence={welcomeMessage}
        speed={10}
        wrapper="h2"
        repeat={Infinity}
      />
    </div>
  </div>
);

export class Home extends Component {
  static displayName = Home.name;
  render() {
    return videoContainer;
  }
}

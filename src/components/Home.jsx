import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import drone from "../images/Drone-Video.mp4";
import "../style/Home.css";

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

// Video autoplay doesnt work on lowpower mode ios :)
const videoContainer = (
  <div className="flexbox-container">
    <video
      className="header_video"
      id="dronevideo"
      src={drone}
      type="video/mp4"
      muted={true}
      autoPlay={true}
      playsInline={true}
      loop={true}
    />
    <div class="centered">
      <TypeAnimation
        sequence={welcomeMessage}
        speed={10}
        wrapper="h2"
        repeat={Infinity}
        style={{ fontSize: "15px" }}
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

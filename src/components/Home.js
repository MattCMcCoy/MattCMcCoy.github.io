import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import drone from "./Images/Drone-Video.mp4";
import "./Styling/Home.css";
import { NavMenu } from "./NavMenu";

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

// const cardContent = [
//   {
//     href: "/aboutme",
//     image: require("./Images/LakeTahoeSunset.jpeg"),
//     title: "About Me",
//     description: "Learn about my hobbies/Things I like to do for fun.",
//   },
//   {
//     href: "/experience",
//     image: require("./Images/bluehill.jpeg"),
//     title: "Experience",
//     description: "Learn about my professional experiences.",
//   },
//   {
//     href: "/projects",
//     image: "",
//     title: "Projects",
//     description: "Learn about the projects I have and am working on.",
//   },
// ];

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

// Cards need to be centered. Or at least to left a bit more.
export class Home extends Component {
  static displayName = Home.name;
  render() {
    return (
      <div className="flexbox-container">
        {videoContainer}
        <div>
        {/* {cardContent.map(ActionAreaCard).map((item) => (
          <div className="child">{item}</div>
        ))} */}
        <NavMenu/>
        </div>
      </div>
    );
  }
}

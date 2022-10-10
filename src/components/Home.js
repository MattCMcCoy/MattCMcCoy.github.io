import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";

import { ActionAreaCard } from "./component-parts/Card";

import drone from "./Images/Drone-Video.mp4";
import "./Home.css";

const welcome = [
  "Hey My Name Is Matt! :)",
  2000,
  "",
  20,
  "Welcome To My Life.",
  2000,
  "",
  20,
];

function createCards() {
  const cardContent = [
    {
      href: "/aboutme",
      image: require("./Images/LakeTahoeSunset.jpeg"),
      title: "About Me",
      description: "Learn about my hobbies/Things I like to do for fun.",
    },
    {
      href: "/experience",
      image: "",
      title: "Personal Experience",
      description: "Learn about my professional experiences",
    },
    {
      href: "/projects",
      image: "",
      title: "Projects",
      description: "Learn about the projects I have and am working on"
    }
  ];
  return <div>{cardContent.map(ActionAreaCard)}</div>;
}

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div class="container">
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
              sequence={welcome}
              speed={10}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
        </div>
        {createCards()}
      </div>
    );
  }
}

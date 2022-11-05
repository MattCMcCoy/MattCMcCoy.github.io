import React, { Component } from "react";
import { ActionAreaCard } from "./component-parts/Card";
import "../style/Projects.css";
import { Grid } from "@mui/material";

const cardContent = [
  {
    href: "https://github.com/MattCMcCoy/MattCMcCoy.github.io",
    image: require("../images/PortfolioWebsite.png"),
    title: "Portfolio Website",
    description:
      "This website that I have been developing in my free time to learn React and CSS. A main goal of this website was keeping a responsive design so that it works on mobile.",
  },
  {
    href: "https://github.com/MattCMcCoy/AgarIOGame",
    image: require("../images/agario.png"),
    title: "Agar.io Remake",
    description:
      "A project in which entails using OOP principles inorder to make a version of the Agar.io online game.",
  },
  {
    href: "",
    image: require("../images/ImageProcessor.png"),
    title: "Photo Editor",
    description:
      "An image processor in Java utilizing Swing for a GUI and use of command line arguments; the image processor allows the user to load, mutate, and save the image to the user’s computer" +
      "\n" +
      "NOTE: This project was made private at my professors request. If you would like to view this code or learn more about it email me :).",
  },
  {
    href: "",
    image: require("../images/marblesolitaire.png"),
    title: "Marble Solitaire",
    description:
      "Created a Java version of a Marble Solitaire game that allows a user to play in 3 different styles of board types (English, European, and Triangular)." +
      "\n" +
      "NOTE: This project was made private at my professors request. If you would like to view this code or learn more about it email me :).",
  },
  {
    href: "https://github.com/MattCMcCoy/ChatProgram",
    image: require("../images/ChatProgram.png"),
    title: "Chat Program",
    description:
      "Built a multithreaded python chat application that allows multiple users to connect to a local machine",
  },
];

export class Projects extends Component {
  static displayName = Projects.name;

  render() {
    return (
      <div className="project-container">
        <Grid container className="card-container">
          {cardContent.map((card) => (
            <Grid>{ActionAreaCard(card)}</Grid>
          ))}
        </Grid>
        {"Note: Clicking these cards will take you to the GitHub Repo."}
      </div>
    );
  }
}

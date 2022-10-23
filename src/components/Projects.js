import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import { ActionAreaCard } from "./component-parts/Card";
import "./Styling/Projects.css";
import { Grid } from "@mui/material";

const cardContent = [
  {
    href: "/agario",
    image: require("./Images/agario.png"),
    title: "Agar.io Remake",
    description:
      "A project in which entails using OOP principles inorder to make a version of the Agar.io online game.",
  },
  {
    href: "/photoeditor",
    image: require("./Images/bluehill.jpeg"),
    title: "Photo Editor",
    description:
      "A project made in my Object Oriented Design Course in which practices OOP and good coding practices.",
  },
  {
    href: "/comingsoon",
    image: "",
    title: "ComingSoon",
    description: "...",
  },
  {
    href: "/comingsoon",
    image: "",
    title: "ComingSoon",
    description: "...",
  },
  {
    href: "/comingsoon",
    image: "",
    title: "ComingSoon",
    description: "...",
  },
  {
    href: "/comingsoon",
    image: "",
    title: "ComingSoon",
    description: "...",
  },
  {
    href: "/comingsoon",
    image: "",
    title: "ComingSoon",
    description: "...",
  },
  {
    href: "/comingsoon",
    image: "",
    title: "ComingSoon",
    description: "...",
  },
];

export class Projects extends Component {
  static displayName = Projects.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div>
          <Grid container>
            {cardContent.map((card) => (
              <Grid>{ActionAreaCard(card)}</Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

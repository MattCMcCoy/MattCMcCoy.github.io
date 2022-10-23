import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

import { AboutMe } from "./components/AboutMe";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";

const AppRoutes = [
  {
    index: "/",
    element: <Home />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
];

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}

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
    path: "/aboutme",
    component: <AboutMe />,
  },
  {
    path: "/fetch-data",
    component: <FetchData />,
  },
  {
    path: "/resume",
    component: <Resume />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    index: "/",
    component: <Home />,
  },
];

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { component, ...rest } = route;
            return <Route key={index} {...rest} element={component} />;
          })}
        </Routes>
      </Layout>
    );
  }
}

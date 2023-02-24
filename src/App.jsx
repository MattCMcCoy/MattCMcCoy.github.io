import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';

const AppRoutes = [
  {
    index: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/resume',
    element: <Resume />,
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

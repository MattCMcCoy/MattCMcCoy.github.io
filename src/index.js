/// <reference types="react-scripts" />
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './style/Main.css';
import './style/Style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter basename={process.env.PUBLIC_URL + '/'}>
    <App />
  </HashRouter>
);

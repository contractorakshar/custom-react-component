import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

export const UniversalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  body {
    font-family:  'Oxygen',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const el = document.createElement('div');
el.id = 'feedback-widget__' + Math.random().toString(36).slice(-5);
document.body.appendChild(el);

ReactDOM.render(
  <React.StrictMode>
    <UniversalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById(el.id)
);

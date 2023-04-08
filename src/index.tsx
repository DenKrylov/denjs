import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  li {
    list-style-type: none;
  }

  #root {
    height: 100vh;
    width: 100%;
    font-family: 'Play', sans-serif;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </RecoilRoot>
);

reportWebVitals();

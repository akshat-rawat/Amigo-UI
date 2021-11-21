import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/home';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Home from './home/home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

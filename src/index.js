import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const smoothDirect = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


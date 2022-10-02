import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './app.sass'
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import InputLevel from "./LevelWthTable";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputLevel />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

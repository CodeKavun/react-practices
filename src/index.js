import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import FamousPicture from './FamousPicture';
import Bio from './Bio';
import Gallery from './Gallery';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route>
          <Route path="/bio" element={<Bio/>}></Route>
          <Route path="/famous-pic" element={<FamousPicture/>}></Route>
          <Route path="/gallary" element={<Gallery/>}></Route>
        </Route>
      </Routes>
    </div>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

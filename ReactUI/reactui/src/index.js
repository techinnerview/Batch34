import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import LifeCycleComponent from './lifeCycleComponent';
import TypeAheadComponent from './typeAheadComponent';
import CarouselComponent from './carouselComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/carousel" element={<CarouselComponent />} />
          <Route path="/typeahead" element={<TypeAheadComponent />} />
          <Route path="/lifecycle" element={<LifeCycleComponent  messageFromParent={"Hello Everyone !!"} />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/accessory-shop" element={<App />} />
        <Route path="/accessory-shop/routing-app" element={<App />} />
        <Route path="/accessory-shop/routing-app/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

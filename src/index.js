import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import User from './components/User/User';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  </div>
);
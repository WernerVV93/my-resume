import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import './fonts.css'
import "./Home.css"
import "./Education.css"
import "./References.css"
import "./Contact.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

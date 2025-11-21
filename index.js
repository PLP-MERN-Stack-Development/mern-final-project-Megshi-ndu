require('dotenv').config();

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

console.log("Port:", port);
console.log("MongoDB URI:", mongoUri);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initSentry } from './services/sentry';

// Initialize Sentry for error tracking
initSentry();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
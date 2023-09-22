import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Cursor, Navbar, ScrollIndicator } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <ScrollIndicator />
    <Cursor />
  </React.StrictMode>,
);

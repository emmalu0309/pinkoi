import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import './index.css'

const root = createRoot(document.getElementById('root')); // 使用 createRoot
root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
);

// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}> {/* Usamos 'null' para que no muestre nada mientras carga */}
      <App />
    </Suspense>
  </React.StrictMode>,
);
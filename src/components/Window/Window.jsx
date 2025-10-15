// src/components/Window/Window.jsx
import React from 'react';
import './Window.css';

function Window({ title, children, isActive, onClose }) {
  // Si no está activa, no renderizamos nada
  if (!isActive) {
    return null;
  }

  return (
    <div className="window active"> {/* La clase 'active' ahora depende del estado */}
      <div className="window-header">
        <div className="window-controls">
          <div className="window-control close" onClick={onClose}></div>
        </div>
        <div className="window-title">{title}</div>
        <div style={{ width: '52px' }}></div>
      </div>
      <div className="window-content">
        {children} {/* Aquí se mostrará el contenido de cada sección */}
      </div>
    </div>
  );
}

export default Window;
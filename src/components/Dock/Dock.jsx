// src/components/Dock/Dock.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Dock.css';

// --- ¡AQUÍ ESTÁ EL CAMBIO CLAVE! ---
// Importamos TODOS los iconos directamente de la librería 'react-icons'
import { IoGridOutline, IoPersonOutline, IoMailOutline, IoDocumentTextOutline, IoRibbonOutline, IoImagesOutline } from "react-icons/io5";

// Ya no necesitamos el archivo './Icons.jsx' para esto

function Dock({ onIconClick }) {
  const { t, i18n } = useTranslation();

  const dockApps = [
    { id: 'projects', icon: <IoGridOutline /> },
    { id: 'about', icon: <IoPersonOutline /> },
    { id: 'certificates', icon: <IoRibbonOutline /> },
    { id: 'gallery', icon: <IoImagesOutline /> },
    { id: 'contact', icon: <IoMailOutline /> },
  ];

    // --- ¡NUEVA FUNCIÓN PARA MANEJAR LA DESCARGA! ---
  const handleDownloadCV = (e) => {
    // 1. Obtenemos el mensaje de confirmación traducido
    const confirmationMessage = t('dock.download_confirmation');

    // 2. Mostramos la alerta. window.confirm() devuelve 'true' si aceptan, 'false' si cancelan.
    const userConfirmed = window.confirm(confirmationMessage);

    // 3. Si el usuario cancela, prevenimos la descarga
    if (!userConfirmed) {
      e.preventDefault(); // Detiene la acción por defecto del enlace (la descarga)
    }
  };

  return (
    <div className="dock">
      {dockApps.map((app) => (
        <div
          key={app.id}
          className="dock-item"
          onClick={() => onIconClick(app.id)}
        >
          {app.icon}
          <span className="label" key={`${app.id}-${i18n.language}`}>
            {t(`dock.${app.id}`)}
          </span>
        </div>
      ))}

      {/* El botón de descarga ahora llama a nuestra nueva función al hacer clic */}
      <a
        href="/CV-Dietrich-Rojas.pdf"
        download="CV-Dietrich-Rojas.pdf"
        className="dock-item"
        onClick={handleDownloadCV} // <-- ¡AQUÍ ESTÁ EL CAMBIO PRINCIPAL!
      >
        <IoDocumentTextOutline />
        <span className="label" key={`resume-${i18n.language}`}>{t('dock.resume')}</span>
      </a>
    </div>
  );
}

export default Dock;
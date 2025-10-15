// src/components/WelcomeWidget.jsx

import React, { useState, useEffect } from 'react';
import './WelcomeWidget.css';
import { useTranslation } from 'react-i18next';

// --- CONFIGURACIÓN DE DURACIONES ---
const DURATION_FORWARD = 4000;
const DURATION_REVERSE = 4000;
const DURATION_TITLE_CHANGE = 3000; // Cada 3 segundos cambiará el título

function WelcomeWidget({ onIconClick }) {
  const { t } = useTranslation();

  // --- LÓGICA PARA LA ANIMACIÓN DEL AVATAR (GIF) ---
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const switchGifAnimation = () => {
      setIsForward(current => !current);
    };
    const currentGifDuration = isForward ? DURATION_FORWARD : DURATION_REVERSE;
    const gifTimer = setTimeout(switchGifAnimation, currentGifDuration);
    return () => clearTimeout(gifTimer);
  }, [isForward]);

  // --- ¡NUEVA LÓGICA PARA LOS TÍTULOS ROTATIVOS! ---
  const titles = t('hero.titles', { returnObjects: true });
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const switchTitle = () => {
      setTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
    };
    const titleTimer = setInterval(switchTitle, DURATION_TITLE_CHANGE);
    return () => clearInterval(titleTimer);
  }, [titles.length]); // Se reinicia si cambia el idioma y la cantidad de títulos

  return (
    <div className="hero-layout">
      
      <div className="hero-left">
        {/* Tu animación de GIF (sin cambios) */}
        <img
          className="avatar-image"
          src={isForward ? "/avatar-forward.gif" : "/avatar-reverse.gif"}
          key={isForward ? "forward" : "reverse"}
          alt="Avatar animado de Dietrich"
        />
        <img
          src={!isForward ? "/avatar-forward.gif" : "/avatar-reverse.gif"}
          style={{ display: 'none' }}
          alt=""
        />
      </div>
      
      <div className="hero-right">
        {/* <h1 className="hero-title">
          {t('hero.greeting')} <br />
          <span className="rotating-title" key={titleIndex}>
            {titles[titleIndex]}
          </span>
        </h1> */}
        <h1 className="hero-title">
          {t('hero.greeting')} <br />
          {/* Añadimos el atributo 'data-text' */}
          <span 
            className="rotating-title" 
            key={titleIndex}
            data-text={titles[titleIndex]}
          >
            {titles[titleIndex]}
          </span>
        </h1>
        <p className="hero-description">{t('hero.description')}</p>
        <div className="hero-buttons">
          <button className="primary" onClick={() => onIconClick('projects')}>
            {t('hero.buttonProjects')}
          </button>
          <button className="secondary" onClick={() => onIconClick('contact')}>
            {t('hero.buttonContact')}
          </button>
        </div>
      </div>

    </div>
  );
}

export default WelcomeWidget;
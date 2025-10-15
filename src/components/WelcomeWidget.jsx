// src/components/WelcomeWidget.jsx
import React, { useState, useEffect } from 'react';
import './WelcomeWidget.css';
import { useTranslation } from 'react-i18next'; // <-- CORRECTO

// --- ¡CONFIGURACIÓN IMPORTANTE! ---
// Mide la duración de tus GIFs (puedes verla en las propiedades del archivo)
// y pon los valores aquí en milisegundos (1 segundo = 1000 ms).
const DURATION_FORWARD = 4000; // Ej: 3 segundos para el GIF normal
const DURATION_REVERSE = 4000; // Ej: 2.5 segundos para el GIF de reversa

function WelcomeWidget({ onIconClick }) {
  const { t } = useTranslation();

  // 'isForward' controla qué GIF se está mostrando
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    // Esta función se encarga de cambiar entre los GIFs
    const switchAnimation = () => {
      setIsForward(current => !current); // Invierte el estado (true -> false -> true...)
    };

    // Calcula cuánto tiempo esperar antes de cambiar al siguiente GIF
    const currentDuration = isForward ? DURATION_FORWARD : DURATION_REVERSE;

    // Creamos un temporizador que llamará a 'switchAnimation' cuando el GIF actual termine
    const timer = setTimeout(switchAnimation, currentDuration);

    // Función de limpieza: si el componente se desmonta, cancelamos el temporizador
    return () => clearTimeout(timer);

  }, [isForward]); // Este efecto se ejecuta cada vez que 'isForward' cambia

  return (
    <div className="hero-layout">
      
      <div className="hero-left">
        <img
          className="avatar-image"
          // --- ¡LA MAGIA! ---
          // El 'src' de la imagen depende del estado 'isForward'
          src={isForward ? "/avatar-forward.gif" : "/avatar-reverse.gif"}
          
          // Añadimos una 'key' que cambia con el 'src'. ¡ESTO ES CRUCIAL!
          // Le dice a React que es una "nueva" imagen, forzando al navegador
          // a reiniciar la animación del GIF desde el principio.
          key={isForward ? "forward" : "reverse"}

          alt="Avatar animado de Dietrich"
        />
        <img
          src={!isForward ? "/avatar-forward.gif" : "/avatar-reverse.gif"}
          style={{ display: 'none' }} // Lo ocultamos con CSS
          alt="" // No necesita alt text
        />
      </div>
      
      <div className="hero-right">
        <h1 className="hero-title">
          {t('hero.greeting')} <br />
          <span>{t('hero.title')}</span>
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
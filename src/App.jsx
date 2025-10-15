// src/App.jsx
import React, { useState } from 'react';
import './App.css';

// Importa los componentes que ya tenías
import Dock from './components/Dock/Dock';
import Window from './components/Window/Window';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Certificates from './components/Sections/Certificates';
import Gallery from './components/Sections/Gallery';
import Header from './components/Header';
import CSSBackgroundSkills from './components/CSSBackgroundSkills.jsx'; 
import WelcomeWidget from './components/WelcomeWidget';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [activeWindow, setActiveWindow] = useState(null);

  const handleIconClick = (windowId) => {
    setActiveWindow(windowId);
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
  };

  const windowContent = {
    projects: <Projects />,
    about: <About />,
    certificates: <Certificates />,
    gallery: <Gallery />,
    contact: <Contact />,
  };
  
 return (
    <div className="app-container">
      
      <div className="background-layer">
        <CSSBackgroundSkills />
      </div>

      <div className="content-layer">
        
        {/* --- ¡AQUÍ ESTÁ EL CAMBIO! --- */}
        {/* Le pasamos la función para cerrar ventanas al Header */}
        <Header onLogoClick={handleCloseWindow} />
        
        <div className="desktop">
          {activeWindow === null ? (
            <WelcomeWidget onIconClick={handleIconClick} /> 
          ) : (
            <Window
              title={t(`windowTitles.${activeWindow}`)}
              isActive={activeWindow !== null}
              onClose={handleCloseWindow}
            >
              {windowContent[activeWindow]}
            </Window>
          )}
        </div>
        <Dock onIconClick={handleIconClick} />
      </div>

    </div>
  );
}

export default App;
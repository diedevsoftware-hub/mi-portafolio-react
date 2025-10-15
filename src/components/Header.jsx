// src/components/Header.jsx

import React from 'react';
import './Header.css';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

// 1. El componente ahora recibe la prop 'onLogoClick' del App.jsx
function Header({ onLogoClick }) {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="main-header">
      {/* 2. El div del logo ahora es clickeable y llama a la función */}
      <div className="logo" onClick={onLogoClick} title="Ir al inicio">
        DieDev
      </div>

      <nav className="main-nav">
        
        <div className="social-nav">
          <a href="https://github.com/diedevsoftware-hub" target="_blank" rel="noopener noreferrer" title="GitHub">
            <IoLogoGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anderson-dietrich-garc%C3%ADa-chil%C3%B3n-39b9a438a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <IoLogoLinkedin size={24} />
          </a>
        </div>
        <div className="nav-divider"></div>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('es')} disabled={i18n.language === 'es'}>ES</button>
          <span>/</span>
          <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>EN</button>
        </div>

      </nav>
    </header>
  );
}

export default Header;
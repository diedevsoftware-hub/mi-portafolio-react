// src/components/CSSBackgroundSkills.jsx

import React, { useRef } from "react";
import "../assets/CSSBackgroundSkills.css";

const skills = [
  "react.svg", "javascript.svg", "python.svg", "django.svg",
  "nextdotjs.svg", "typescript.svg", "java.svg", "php.svg",
  "html5.svg", "css.svg", "git.svg", "github.svg",
  "nodedotjs.svg", "mysql.svg", "sqlite.svg", "postgresql.svg", "bootstrap.svg",
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const ICON_COUNT = 25;

const CSSBackgroundSkills = () => {
  const iconParams = useRef(
    Array.from({ length: ICON_COUNT }).map((_, i) => ({
      icon: skills[i % skills.length],
      left: getRandom(0, 95),
      size: getRandom(20, 32),
      duration: getRandom(20, 40), // Animaciones un poco más lentas
      delay: getRandom(0, -20),   // Delay negativo para que empiecen ya en movimiento
      
      // --- ¡LA CLAVE ESTÁ AQUÍ! ---
      // Damos una posición 'top' inicial ALEATORIA DENTRO de la pantalla
      initialTop: getRandom(0, 100),
    }))
  );

  return (
    <div className="css-skills-bg">
      {iconParams.current.map((params, i) => (
        <img
          key={i}
          src={`/icons/${params.icon}`}
          alt=""
          className="skill-icon"
          style={{
            left: `${params.left}vw`,
            width: `${params.size}px`,
            height: `${params.size}px`,
            
            // Aplicamos la posición 'top' inicial
            top: `${params.initialTop}vh`,
            
            // La animación usará los valores de 'top' del keyframe
            animation: `floatSkill ${params.duration}s linear ${params.delay}s infinite`,
          }}
          draggable="false"
        />
      ))}
    </div>
  );
};

export default CSSBackgroundSkills;
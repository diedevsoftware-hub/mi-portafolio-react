// src/components/Sections/About.jsx

import React from 'react';
import './Sections.css';
import { useTranslation } from 'react-i18next';
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoGithub } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiDjango, SiGit, SiPhp, SiMysql, SiSqlite, SiPostgresql, SiBootstrap } from "react-icons/si";

const skills = [
  // Front-End
  { name: "JavaScript", icon: <IoLogoJavascript size={28} /> },
  { name: "React", icon: <IoLogoReact size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  { name: "TypeScript", icon: <SiTypescript size={28} /> },
  { name: "HTML5", icon: <IoLogoHtml5 size={28} /> },
  { name: "CSS3", icon: <IoLogoCss3 size={28} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={28} /> },
  // Back-End
  { name: "Python", icon: <IoLogoPython size={28} /> },
  { name: "Django", icon: <SiDjango size={28} /> },
  { name: "Node.js", icon: <IoLogoNodejs size={28} /> },
  { name: "Java", icon: <FaJava size={28} /> },
  { name: "PHP", icon: <SiPhp size={28} /> },
    // Bases de Datos
  { name: "MySQL", icon: <SiMysql size={28} /> },       // <-- AÑADIDO
  { name: "SQLite", icon: <SiSqlite size={28} /> },     // <-- AÑADIDO
  { name: "PostgreSQL", icon: <SiPostgresql size={28} /> }, // <-- AÑADIDO
  // Herramientas
  { name: "Git", icon: <SiGit size={28} /> },
  { name: "GitHub", icon: <IoLogoGithub size={28} /> },
];

function About() {
  const { t } = useTranslation();
  
  const experienceItems = t('timeline.experienceItems', { returnObjects: true }) || [];
  const educationItems = t('timeline.educationItems', { returnObjects: true }) || [];

  return (
    <>
      <div className="about-layout">
        <div className="about-left">
          <img src="/profile2.jpeg" alt="Foto de Dietrich" className="profile-photo" />
        </div>
        <div className="about-right">
          <h2>{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p className="value-proposition">{t('about.value_proposition')}</p>
        </div>
      </div>

      {/* --- CORRECCIÓN DE MAQUETACIÓN --- */}
      {/* La línea de tiempo completa debe estar dentro de su contenedor */}
      <div className="timeline-container">
        <div className="timeline-block">
          <h3>{t('timeline.educationTitle')}</h3>
          {educationItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <h4>{item.title}</h4>
              <span className="timeline-company">{item.institution}</span>
              <span className="timeline-date">{item.date}</span>
            </div>
          ))}
        </div>

        <div className="timeline-block">
          <h3>{t('timeline.experienceTitle')}</h3>
          {experienceItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <h4>{item.title}</h4>
              <span className="timeline-company">{item.company}</span>
              <span className="timeline-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>{t('about.skillsTitle')}</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="interests-section">
        <h3>{t('interests.title')}</h3>
        <p>{t('interests.text')}</p>
      </div>
    </>
  );
}

export default About;
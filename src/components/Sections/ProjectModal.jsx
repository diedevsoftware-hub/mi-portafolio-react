// src/components/Sections/ProjectModal.jsx

import React from 'react';
import './Sections.css';
import { IoClose, IoLogoGithub, IoOpenOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next'; // 1. Importa el hook de traducción

function ProjectModal({ project, onClose }) {
  const { t } = useTranslation(); // 2. Usa el hook

  if (!project) return null;

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };
  

  const allProjects = t('projects.items', { returnObjects: true });
  const currentProjectData = allProjects.find(p => p.id === project.id);


  if (!currentProjectData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={handleClose}>
          <IoClose size={32} />
        </button>

        {/* 4. Usamos los datos actualizados de 'currentProjectData' */}
        <img src={currentProjectData.image} alt={currentProjectData.title} className="modal-image" />
        <h2>{currentProjectData.title}</h2>
        <div className="modal-tags">
          {currentProjectData.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <p className="modal-long-description">{currentProjectData.longDescription}</p>
        <div className="modal-links">
          {currentProjectData.demoUrl && (
            <a href={currentProjectData.demoUrl} target="_blank" rel="noopener noreferrer">
              <IoOpenOutline /> Ver Demo
            </a>
          )}
          <a href={currentProjectData.repoUrl} target="_blank" rel="noopener noreferrer">
            <IoLogoGithub /> Ver Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
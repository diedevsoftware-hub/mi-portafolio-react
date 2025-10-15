// src/components/Sections/ProjectCard.jsx

import React from 'react';
import './Sections.css';

// Ahora recibe una prop 'onClick'
function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.image} alt={project.title} className="project-card-image" />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
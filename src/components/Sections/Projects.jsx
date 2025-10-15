// src/components/Sections/Projects.jsx

import React, { useState } from 'react'; // Asegúrate de que 'useState' esté importado
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Sections.css';

function Projects() {
    const { t } = useTranslation();
    
    // --- ¡ESTA ES LA LÓGICA QUE FALTABA! ---
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
      setSelectedProject(project);
    };

    const handleCloseModal = () => {
      setSelectedProject(null);
    };
    // --- FIN DE LA LÓGICA QUE FALTABA ---

    // Leemos el array de proyectos desde el archivo de traducción
    const projects = t('projects.items', { returnObjects: true });

    return (
        <>
            <h2>{t('projects.title')}</h2>
            <p>{t('projects.description')}</p>
            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => handleCardClick(project)} // Usamos la función para abrir el modal
                    />
                ))}
            </div>

            {/* Ahora 'selectedProject' existe y se lo podemos pasar al Modal */}
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </>
    );
}

export default Projects;
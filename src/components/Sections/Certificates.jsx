// src/components/Sections/Certificates.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Sections.css';
import CertificateModal from './CertificateModal'; // Importamos el nuevo modal

function Certificates() {
  const { t } = useTranslation();
  
  // Leemos los datos de los certificados desde i18n
  const certificateData = t('certificates.items', { returnObjects: true });

  // Estado para manejar qué imagen se muestra en el modal
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <h2>{t('certificates.title')}</h2>
      <p>{t('certificates.description')}</p>
      <div className="certificate-grid">
        {certificateData.map((cert, index) => (
          // Ahora el 'div' es clickeable, no el 'a'
          <div key={index} className="certificate-card" onClick={() => setSelectedCert(cert.img)}>
            <div className="cert-image-container">
              <img src={cert.img} alt={cert.title} />
              <div className="cert-overlay">Ver Certificado</div>
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* El modal que se mostrará al hacer clic */}
      <CertificateModal imageUrl={selectedCert} onClose={() => setSelectedCert(null)} />
    </>
  );
}

export default Certificates;
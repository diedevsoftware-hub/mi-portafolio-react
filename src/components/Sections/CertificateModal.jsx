// src/components/Sections/CertificateModal.jsx

import React from 'react';
import './Sections.css';
import { IoClose } from 'react-icons/io5';

function CertificateModal({ imageUrl, onClose }) {
  if (!imageUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content certificate-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <IoClose size={32} />
        </button>
        <img src={imageUrl} alt="Certificado" className="certificate-full-image" />
      </div>
    </div>
  );
}

export default CertificateModal;
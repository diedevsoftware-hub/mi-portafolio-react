// src/components/Sections/Gallery.jsx

import React, { useState } from 'react'; // 1. Importa useState
import { useTranslation } from 'react-i18next';
import './Sections.css';
// 2. Reutilizamos el modal de los certificados. ¡Eficiencia!
import CertificateModal from './CertificateModal';

function Gallery() {
  const { t } = useTranslation();
  const galleryData = t('gallery.items', { returnObjects: true });

  // 3. Estado para guardar la URL de la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h2>{t('gallery.title')}</h2>
      <p>{t('gallery.description')}</p>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          // 4. Hacemos que cada item sea clickeable y actualice el estado
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(item.img)}>
            <img src={item.img} alt={item.caption} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>

      {/* 5. Añadimos el modal, que se mostrará cuando 'selectedImage' tenga una URL */}
      <CertificateModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

export default Gallery;
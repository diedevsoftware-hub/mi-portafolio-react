// src/components/Sections/Contact.jsx

import React, { useState } from 'react';
import './Sections.css';
import { useTranslation } from 'react-i18next';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- ¡LA LÓGICA HA CAMBIADO COMPLETAMENTE! ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Tu número de WhatsApp en formato internacional
    const phoneNumber = '51963648675'; // <-- ¡REEMPLAZA ESTO CON TU NÚMERO!

    // 2. Creamos el mensaje pre-escrito con los datos del formulario
    const messageTemplate = `¡Hola Dietrich! 👋\n\nSoy ${formData.name}.\nMi correo es: ${formData.email}\n\nTe escribo por lo siguiente:\n${formData.message}`;

    // 3. Codificamos el mensaje para que funcione en una URL
    const encodedMessage = encodeURIComponent(messageTemplate);

    // 4. Creamos la URL final de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 5. Abrimos la URL en una nueva pestaña
    window.open(whatsappURL, '_blank');

    // Opcional: Limpiamos el formulario después de abrir el enlace
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="contact-layout">
        <div className="contact-left">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.p1')}</p>
          <div className="social-links">
            <a href="https://github.com/diedevsoftware-hub" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub size={32} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/anderson-dietrich-garc%C3%ADa-chil%C3%B3n-39b9a438a/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin size={32} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="contact-right">
          {/* El 'onSubmit' ahora llama a la nueva función */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('contact.form.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.form.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit">
              {t('contact.form.buttonSend')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
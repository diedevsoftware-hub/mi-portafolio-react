// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  // --- Textos en Español ---
  es: {
    translation: {
      // --- ¡SECCIÓN AÑADIDA! ---
      dock: {
        projects: "Proyectos",
        about: "Acerca de Mí",
        certificates: "Certificados", // <-- AÑADIR
        gallery: "Galería",         // <-- AÑADIR
        contact: "Contacto",
        resume: "Descargar CV",      // <-- AÑADIR
        download_confirmation: "¿Estás seguro de que quieres descargar mi CV?"
      },
      // --- FIN DE LA SECCIÓN AÑADIDA ---

      // Header
      windowTitles: {
        projects: "Proyectos",
        about: "Acerca de Mí",
        certificates: "Mis Certificados", // <-- AÑADIR
        gallery: "Mi Galería",            // <-- AÑADIR
        contact: "Contacto",
      },
      // Hero Section (WelcomeWidget)
      hero: {
        greeting: "Hola, soy Dietrich.",
        titles: [
          "Desarrollador Full-Stack.",
          "Creador de Experiencias Web.",
          "Apasionado por la Tecnología.",
          "Solucionador de Problemas."
        ],
        description: "Transformo ideas en aplicaciones web elegantes, interactivas y eficientes. Bienvenido a mi espacio creativo.",
        buttonProjects: "Mira mis Proyectos",
        buttonContact: "Contáctame",
      },
      // Proyectos
      projects: {
        title: "Mis Proyectos",
        description: "Una selección de mis trabajos, demostrando habilidades en desarrollo front-end y back-end.",
        items: [
          { 
            id: 1, 
            title: "🛒 FG-Shop (Comercio electrónico)", 
            image: "/projects/fg-shop.png",
            description: "Plataforma de e-commerce full-stack con gestión de productos, clientes y ventas.", 
            longDescription: "FG-Shop es una solución completa de comercio electrónico desarrollada con Python en el backend. Incluye funcionalidades para administrar productos, proveedores, clientes, compras y ventas, demostrando un sólido manejo de la lógica de negocio y bases de datos.", 
            tags: ["Django", "Python", "HTML", "CSS", "JavaScript"],
            demoUrl: "https://fgshop-ecommerce.onrender.com",
            repoUrl: "https://github.com/diedevsoftware-hub/FG-Shop" 
          },
          { 
            id: 2, 
            title: "🌱 Nextt Farm App (Desafío de la NASA)", 
            image: "/projects/farm-app.png",
            description: "Aplicación web moderna construida con el stack de Next.js y TypeScript.", 
            longDescription: "Un proyecto que explora las capacidades de Next.js para crear aplicaciones rápidas y robustas. El uso de TypeScript asegura un código mantenible y escalable, ideal para proyectos que requieren alta fiabilidad y una excelente experiencia de desarrollador.", 
            tags: ["Next.js", "TypeScript", "React"],
            demoUrl: "https://space-farm-kappa.vercel.app/",
            repoUrl: "https://github.com/diedevsoftware-hub/nextt-farm-app"
          },
          { 
            id: 3, 
            title: "🧸 BabyBoom (Comercio electrónico)", 
            image: "/projects/babyboom.png",
            description: "Tienda e-commerce de juguetes construida con el poderoso framework Django.", 
            longDescription: "BabyBoom es una tienda online funcional que demuestra habilidades avanzadas en Django. Incluye gestión de productos, carrito de compras y un panel de administración robusto, aprovechando al máximo las 'baterías incluidas' del framework.", 
            tags: ["Django", "Python", "CSS", "HTML"],
            demoUrl: "https://babyboom-django.onrender.com", 
            repoUrl: "https://github.com/diedevsoftware-hub/babyboom-django"
          },
          { 
            id: 4, 
            title: "🏨 Hotel Nila (Página Web)", 
            image: "/projects/hotelnila.png",
            description: "Aplicación web para la gestión del Hotel Nila de la ciudad de Cajamarca.", 
            longDescription: "Un proyecto práctico que resuelve una necesidad real. Este sistema web, construido con Python, permite la administración de un hotel, demostrando la capacidad de crear soluciones a medida desde cero y desplegarlas para producción.", 
            tags: ["Django", "Python", "CSS", "HTML", "JavaScript"],
            demoUrl: "https://hotelnila.onrender.com",
            repoUrl: "https://github.com/diedevsoftware-hub/HotelNila"
          },
          { 
            id: 5, 
            title: "🗺️ SIG Municipalidad de Jesús", 
            image: "/projects/sig-jesus.png", // <-- CAMBIA EL NOMBRE DE LA IMAGEN
            description: "Sistema de Información Geográfica (SIG) para catastro, desarrollado con Next.js y TypeScript.", 
            longDescription: "Lideré el desarrollo frontend de este sistema de información geoespacial. El proyecto fue construido con un stack moderno basado en Next.js, asegurando un alto rendimiento y una experiencia de usuario fluida para la visualización y gestión de datos catastrales.", 
            tags: ["Next.js", "TypeScript", "React", "TailwindCSS"],
            repoUrl: "https://github.com/diedevsoftware-hub/sig_municipalidad-jesus"
          },
        ]
      },

      // Acerca de Mí
      about: {
        title: "¡Hola! 👋",
        p1: "Soy un desarrollador full-stack apasionado por crear experiencias web excepcionales. Me especializo en construir aplicaciones modernas, escalables y centradas en el usuario.",
        p2: "Con varios años de experiencia en la industria, he trabajado con diversas tecnologías y frameworks, siempre buscando las mejores soluciones para cada proyecto.",
        value_proposition: "Más que un programador, me considero un solucionador de problemas. Me apasiona analizar desafíos complejos para diseñar y construir soluciones eficientes que aporten valor real.",
        skillsTitle: "Habilidades",
      },
      // Contacto
      contact: {
        title: "Hablemos 💬",
        p1: "¿Tienes un proyecto en mente o simplemente quieres saludar? Rellena el formulario o contáctame a través de mis redes. ¡Me encantaría saber de ti!",
        form: {
          namePlaceholder: "Nombre",
          emailPlaceholder: "Email",
          messagePlaceholder: "Mensaje",
          buttonSend: "Chatear por WhatsApp",
          buttonSending: "Abriendo...",
          statusSuccess: "¡Mensaje enviado con éxito!",
          statusError: "Hubo un error. Inténtalo de nuevo.",
        }
      },
      certificates: {
        "title": "Mis Certificados y Constancias",
        "description": "Una colección de mis credenciales y reconocimientos profesionales.",
        "items": [
          { 
            "img": "/certs/certificado_fgshop.jpeg", 
            "title": "Premio en Feria de Emprendedores", 
            "desc": "Segundo puesto en la categoría de Tecnología con el proyecto 'FG SHOP' en la Feria de Emprendedores de la UNC." 
          },
          { 
            "img": "/certs/certificado_nasa.png", 
            "title": "NASA Space Apps Challenge 2025", 
            "desc": "Certificado 'Galactic Problem Solver' por participación y esfuerzo destacados en el reto internacional de la NASA." 
          },
          { 
            "img": "/certs/constancia_hotelnila.jpeg", 
            "title": "Desarrollador Web en Hotel Nila", 
            "desc": "Constancia por el diseño, desarrollo e implementación de la página web para Elsey Inversiones (Hotel Nila)." 
          },
          { 
            "img": "/certs/constancia_bicicaxas.jpeg", 
            "title": "Desarrollador de Software en Bicicaxas", 
            "desc": "Constancia por el diseño, desarrollo e implementación de la página web para Bicicaxas (BabyBoom)." 
          },
          { 
            "img": "/certs/certificado_practicas_preprofesionales_wisbac.png", 
            "title": "Prácticas en GLOBAL IA SERKEN", 
            "desc": "Certificado por culminar satisfactoriamente las prácticas pre-profesionales como Desarrollador de Software." 
          },
          { 
            "img": "/certs/certificado_practicas_preprofesionales_mdj.jpeg", 
            "title": "Prácticas en Municipalidad de Jesús", 
            "desc": "Certificado por completar 510 horas de prácticas en la Sub Gerencia de Planeamiento Urbano Rural y Catastro." 
          },
          { 
            "img": "/certs/certificado_framer.png", 
            "title": "Curso: Framer, Crea tu primera web", 
            "desc": "Certificado de finalización del curso impartido por NocodeHackers para la creación de sitios web con Framer." 
          },
          { 
            "img": "/certs/certificado_ingles_elemental.jpeg", 
            "title": "Certificado de Inglés - Nivel Elemental", 
            "desc": "Otorgado por el Centro de Idiomas de la UNC por haber completado los 10 ciclos del nivel elemental." 
          },
          { 
            "img": "/certs/certificado_ingles_preintermedio.jpeg", 
            "title": "Certificado de Inglés - Nivel Pre-Intermedio", 
            "desc": "Otorgado por el Centro de Idiomas de la UNC por haber completado satisfactoriamente 200 horas de estudio." 
          }
        ]
      }, // <-- No olvides la coma
      timeline: {
        "experienceTitle": "Experiencia Profesional",
        "educationTitle": "Educación",
        "experienceItems": [
          {
            title: "Desarrollador Frontend",
            company: "NASA Space Apps Challenge",
            date: "3 Oct 2025 - 4 Oct 2025", 
            description: "Estuve a cargo del desarrollo frontend para el proyecto 'Nextt Farm App'. Implementé la interfaz de usuario y la lógica de interacción utilizando Next.js y TypeScript en un entorno de equipo colaborativo."
          },
          {
            "title": "Desarrollador de Software",
            "company": "Bicicaxas E.I.R.L (BabyBoom)",
            "date": "Jul 2025 - Sep 2025",
            "description": "Estuve a cargo del diseño, desarrollo e implementación de la página web de BabyBoom, demostrando responsabilidad y profesionalismo en el desempeño de mi labor."
          },
          {
            "title": "Desarrollador Web",
            "company": "Hotel Nila (Elsey Inversiones S.R.L)",
            "date": "May 2025 - Jul 2025",
            "description": "Responsable del diseño, desarrollo e implementación de la página web del Hotel Nila, cumpliendo satisfactoriamente con los requerimientos de la empresa."
          },
          {
            title: "Desarrollador Full-Stack (Proyecto Propio)",
            company: "FG-Shop E-Commerce",
            date: "Abr 2025 - Jun 2025",
            description: "Lideré el diseño, desarrollo y despliegue completo de FG-Shop, una plataforma de e-commerce funcional. Responsable del 100% del proyecto, desde la base de datos hasta la interfaz de usuario."
          },
          {
            "title": "Practicante Pre-Profesional",
            "company": "Municipalidad Distrital de Jesús",
            "date": "Mar 2025 - Jul 2025",
            "description": "Lideré el desarrollo frontend del Sistema de Información Geográfica (SIG), enfocándome en la interfaz y la visualización de datos geoespaciales."
          },
          {
            "title": "Practicante de Desarrollo de Software",
            "company": "GLOBAL IA SERKEN E.I.R.L",
            "date": "Ene 2024 - Ene 2025",
            "description": "Desarrollé módulos de sistema con operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en PHP y MySQL, siguiendo la arquitectura MVC. También colaboré en tareas de soporte y mantenimiento de la base de código."
          }
        ],
        "educationItems": [
          {
            "title": "Ingeniería de Sistemas",
            "institution": "Universidad Nacional de Cajamarca (UNC)",
            "date": "2020 - 2025"
          },
          {
            "title": "Framer: Crea tu primera web",
            "institution": "NocodeHackers",
            "date": "Ago 2025"
          },
          {
            "title": "Inglés - Nivel Pre-Intermedio",
            "institution": "Centro de Idiomas de la UNC",
            "date": "Ago 2024 - Feb 2025"
          },
          {
            "title": "Inglés - Nivel Elemental",
            "institution": "Centro de Idiomas de la UNC",
            "date": "Mar 2024 - Ago 2024"
          }
        ]
      },
      interests: {
        title: "Fuera del Código",
        text: "Más allá de la pantalla, soy un estratega en el tablero de ajedrez, un compañero de equipo en la cancha de fútbol y un aventurero sobre dos ruedas. Mi mayor motivación, sin embargo, proviene de tender una mano a los demás, una actividad que me enriquece y me impulsa a ser mejor."
      }, 
      gallery: {
        title: "Galería de Eventos",
        description: "Algunos momentos de mi viaje profesional y participación en la comunidad.",
        items: [
          { img: '/gallery/team_fg.jpeg', caption: 'Junto al equipo de FG-Shop, presentando nuestra plataforma en la Feria de Emprendedores UNC 2025.' },
          { img: '/gallery/entrevista_tvpru.jpeg', caption: 'Presentando nuestro proyecto en una entrevista para TVPerú durante la Feria de Emprendedores UNC 2025.' },
          { img: '/gallery/reconocimiento_unc_fgshop.jpeg', caption: 'Recibiendo el premio al segundo lugar en la categoría de Tecnología por nuestro proyecto FG-Shop.' },
          { img: '/gallery/hackaton_nasa.jpeg', caption: 'Día 1 de la NASA Space Apps Challenge: inmerso en el desarrollo y la colaboración en equipo.' },
          { img: '/gallery/hackaton_nasa2.jpeg', caption: 'En el escenario principalde la NASA Space Apps Challenge 2025' },
          { img: '/gallery/hackaton_nasa3.jpeg', caption: 'En el photocall oficial de la NASA Space Apps Challenge 2025, un evento global de innovación.' },
          { img: '/gallery/team_mdj.jpeg', caption: 'Equipo multidisciplinario de ingeniería para el desarrollo del Sistema de Información Geográfica (SIG).' },
          { img: '/gallery/team_spacefarm.jpeg', caption: 'Con el equipo Space Farm en la hackathon NASA Space Apps Challenge.' },

          // Añade más imágenes aquí
        ]
      }
    }
  },
  // --- Textos en Inglés ---
  en: {
    translation: {
      // --- ¡SECCIÓN AÑADIDA! ---
      dock: {
        projects: "Projects",
        about: "About Me",
        certificates: "Certificates", // <-- ADD
        gallery: "Gallery",         // <-- ADD
        contact: "Contact",
        resume: "Download CV",       // <-- ADD
        download_confirmation: "Are you sure you want to download my CV?"
      },
      // --- FIN DE LA SECCIÓN AÑADIDA ---

      // Header
      windowTitles: {
        projects: "Projects",
        about: "About Me",
        certificates: "My Certificates", // <-- ADD
        gallery: "My Gallery",            // <-- ADD
        contact: "Contact",
      },
      // Hero Section (WelcomeWidget)
      hero: {
        greeting: "Hi, I'm Dietrich.",
        titles: [
          "Full-Stack Developer.",
          "Web Experience Creator.",
          "Technology Enthusiast.",
          "Problem Solver."
        ],
        description: "I transform ideas into elegant, interactive, and efficient web applications. Welcome to my creative space.",
        buttonProjects: "View my Projects",
        buttonContact: "Contact Me",
      },
      // Proyectos
      projects: {
        title: "My Projects",
        description: "A selection of my work, showcasing skills in both front-end and back-end development.",
        items: [
          { 
            id: 1, 
            title: "🛒 FG-Shop (E-commerce)", 
            image: "/projects/fg-shop.png",
            description: "Full-stack e-commerce platform with product, customer, and sales management.", 
            longDescription: "FG-Shop is a complete e-commerce solution developed with Python on the backend. It includes features to manage products, suppliers, customers, purchases, and sales, demonstrating a strong command of business logic and databases.", 
            tags: ["Django", "Python", "HTML", "CSS", "JavaScript"],
            demoUrl: "https://fgshop-ecommerce.onrender.com",
            repoUrl: "https://github.com/diedevsoftware-hub/FG-Shop" 
          },
          { 
            id: 2, 
            title: "🌱 Nextt Farm App (NASA Challenge)", 
            image: "/projects/farm-app.png",
            description: "A modern web application built with the Next.js and TypeScript stack.", 
            longDescription: "A project that explores the capabilities of Next.js for creating fast and robust applications. The use of TypeScript ensures maintainable and scalable code, ideal for projects requiring high reliability and an excellent developer experience.", 
            tags: ["Next.js", "TypeScript", "React"],
            demoUrl: "https://space-farm-kappa.vercel.app/",
            repoUrl: "https://github.com/diedevsoftware-hub/nextt-farm-app"
          },
          { 
            id: 3, 
            title: "🧸 BabyBoom (E-commerce)", 
            image: "/projects/babyboom.png",
            description: "An e-commerce toy store built with the powerful Django framework.", 
            longDescription: "BabyBoom is a functional online store that showcases advanced Django skills. It includes product management, a shopping cart, and a robust admin panel, making full use of the framework's 'batteries-included' philosophy.", 
            tags: ["Django", "Python", "CSS", "HTML"],
            demoUrl: "https://babyboom-django.onrender.com",
            repoUrl: "https://github.com/diedevsoftware-hub/babyboom-django"
          },
          { 
            id: 4, 
            title: "🏨 Hotel Nila (Web page)", 
            image: "/projects/hotelnila.png",
            description: "Web application for the management of Hotel Nila in the city of Cajamarca.", 
            longDescription: "A practical project that solves a real-world need. This web system, built with Python, allows for hotel management, demonstrating the ability to create custom solutions from scratch and deploy them for production.", 
            tags: ["Django", "Python", "CSS", "HTML", "JavaScript"],
            demoUrl: "https://hotelnila.onrender.com", 
            repoUrl: "https://github.com/diedevsoftware-hub/HotelNila"
          },
          { 
            id: 5, 
            title: "🗺️ GIS for Jesús Municipality", 
            image: "/projects/sig-jesus.png", // <-- CHANGE THE IMAGE NAME
            description: "Geographic Information System (GIS) for cadastre, developed with Next.js & TypeScript.", 
            longDescription: "I led the frontend development for this geospatial information system. The project was built on a modern stack using Next.js, ensuring high performance and a fluid user experience for visualizing and managing cadastral data.", 
            tags: ["Next.js", "TypeScript", "React", "TailwindCSS"],
            repoUrl: "https://github.com/diedevsoftware-hub/sig_municipalidad-jesus"
          },
        ]
      },
      // Acerca de Mí
      about: {
        title: "Hello! 👋",
        p1: "I am a passionate full-stack developer focused on creating exceptional web experiences. I specialize in building modern, scalable, and user-centric applications.",
        p2: "With several years of industry experience, I have worked with various technologies and frameworks, always seeking the best solutions for each project.",
        value_proposition: "More than just a programmer, I consider myself a problem solver. I am passionate about analyzing complex challenges to design and build efficient solutions that provide real value.",
        skillsTitle: "Skills",
      },
      // Contacto
      contact: {
        title: "Let's Talk 💬",
        p1: "Have a project in mind or just want to say hello? Fill out the form or contact me through my social networks. I'd love to hear from you!",
        form: {
          namePlaceholder: "Name",
          emailPlaceholder: "Email",
          messagePlaceholder: "Message",
          buttonSend: "Chat on WhatsApp",
          buttonSending: "Opening...",
          statusSuccess: "Message sent successfully!",
          statusError: "There was an error. Please try again.",
        }
      },
      // --- ¡SECCIÓN AÑADIDA AQUÍ! ---
      certificates: {
        "title": "My Certificates & Credentials",
        "description": "A collection of my professional credentials and recognitions.",
        "items": [
          { 
            "img": "/certs/certificado_fgshop.jpeg", 
            "title": "Award at Entrepreneurship Fair", 
            "desc": "Second place in the Technology category with the 'FG SHOP' project at the UNC Entrepreneurship Fair." 
          },
          { 
            "img": "/certs/certificado_nasa.png", 
            "title": "NASA Space Apps Challenge 2025", 
            "desc": "'Galactic Problem Solver' certificate for outstanding participation and effort in NASA's international challenge." 
          },
          { 
            "img": "/certs/constancia_hotelnila.jpeg", 
            "title": "Web Developer at Hotel Nila", 
            "desc": "Proof of service for the design, development, and implementation of the website for Elsey Inversiones (Hotel Nila)." 
          },
          { 
            "img": "/certs/constancia_bicicaxas.jpeg", 
            "title": "Software Developer at Bicicaxas", 
            "desc": "Proof of service for the design, development, and implementation of the website for Bicicaxas (BabyBoom)." 
          },
          { 
            "img": "/certs/certificado_practicas_preprofesionales_wisbac.png", 
            "title": "Internship at GLOBAL IA SERKEN", 
            "desc": "Certificate for successfully completing a pre-professional internship as a Software Developer." 
          },
          { 
            "img": "/certs/certificado_practicas_preprofesionales_mdj.jpeg", 
            "title": "Internship at the Municipality of Jesús", 
            "desc": "Certificate for completing 510 hours of internship in the Urban and Rural Planning and Cadastre office." 
          },
          { 
            "img": "/certs/certificado_framer.png", 
            "title": "Course: Framer, Create your first web", 
            "desc": "Certificate of completion for the course by NocodeHackers on creating websites with Framer." 
          },
          { 
            "img": "/certs/certificado_ingles_elemental.jpeg", 
            "title": "English Certificate - Elementary Level", 
            "desc": "Awarded by the UNC Language Center for completing all 10 cycles of the elementary level." 
          },
          { 
            "img": "/certs/certificado_ingles_preintermedio.jpeg", 
            "title": "English Certificate - Pre-Intermediate Level", 
            "desc": "Awarded by the UNC Language Center for successfully completing 200 hours of study." 
          }
        ]
      },
      timeline: {
        "experienceTitle": "Professional Experience",
        "educationTitle": "Education",
        "experienceItems": [
          {
            "title": "Frontend Developer",
            "company": "NASA Space Apps Challenge",
            "date": "3 Oct 2025 - 4 Oct 2025", // <-- CHANGE THE YEAR
            "description": "I was in charge of the frontend development for the 'Nextt Farm App' project. I implemented the user interface and interaction logic using Next.js and TypeScript in a collaborative team environment."
          },
          {
            "title": "Software Developer",
            "company": "Bicicaxas E.I.R.L (BabyBoom)",
            "date": "Jul 2025 - Sep 2025",
            "description": "I was in charge of the design, development, and implementation of the BabyBoom website, demonstrating responsibility and professionalism in my work."
          },
          {
            "title": "Web Developer",
            "company": "Hotel Nila (Elsey Inversiones S.R.L)",
            "date": "May 2025 - Jul 2025",
            "description": "Responsible for the design, development, and implementation of the Hotel Nila website, successfully meeting the company's requirements."
          },
          {
            title: "Full-Stack Developer (Personal Project)",
            company: "FG-Shop E-Commerce",
            date: "Apr 2025 - Jun 2025", // <-- CHANGE THE YEAR
            description: "Led the complete design, development, and deployment of FG-Shop, a functional e-commerce platform. Responsible for 100% of the project, from the database to the user interface."
          },
          {
            "title": "Professional Intern",
            "company": "District Municipality of Jesús",
            "date": "Mar 2025 - Jul 2025",
            "description": "Led the frontend development of the Geographic Information System (GIS), focusing on the interface and geospatial data visualization."
          },
          {
            "title": "Software Developer Intern",
            "company": "GLOBAL IA SERKEN E.I.R.L",
            "date": "Jan 2024 - Jan 2025",
            "description": "Developed system modules with CRUD (Create, Read, Update, Delete) operations in PHP and MySQL, following the MVC architecture. Also collaborated on support and maintenance tasks for the codebase."
          }
        ],
        "educationItems": [
          {
            "title": "Systems Engineering",
            "institution": "National University of Cajamarca (UNC)",
            "date": "2020 - 2025"
          },
          {
            "title": "Framer: Create your first web",
            "institution": "NocodeHackers",
            "date": "Aug 2025"
          },
          {
            "title": "English - Pre-Intermediate Level",
            "institution": "UNC Language Center",
            "date": "Aug 2024 - Feb 2025"
          },
          {
            "title": "English - Elementary Level",
            "institution": "UNC Language Center",
            "date": "Mar 2024 - Aug 2024"
          }
        ]
      },
      interests: {
        title: "Outside of Code",
        text: "Beyond the screen, I'm a strategist on the chessboard, a teammate on the soccer field, and an adventurer on two wheels. My greatest motivation, however, comes from lending a hand to others, an activity that enriches me and drives me to be better."
      },
      gallery: {
        title: "Event Gallery",
        description: "Some moments from my professional journey and community involvement.",
        items: [
          { img: '/gallery/team_fg.jpeg', caption: 'With the FG-Shop team, presenting our platform at the UNC Entrepreneurs Fair 2025.' },
          { img: '/gallery/entrevista_tvpru.jpeg', caption: 'Presentando nuestro proyecto en una entrevista para TVPerú durante la Feria de Emprendedores UNC 2025.' },
          { img: '/gallery/reconocimiento_unc_fgshop.jpeg', caption: 'Presenting our project in an interview for TVPerú during the UNC Entrepreneurs Fair 2025.' },
          { img: '/gallery/hackaton_nasa.jpeg', caption: 'Day 1 of the NASA Space Apps Challenge: immersed in development and team collaboration.' },
          { img: '/gallery/hackaton_nasa2.jpeg', caption: 'On the main stage for the NASA Space Apps Challenge' },
          { img: '/gallery/hackaton_nasa3.jpeg', caption: 'At the official photocall for the NASA Space Apps Challenge, a global innovation event.' },
          { img: '/gallery/team_mdj.jpeg', caption: 'Multidisciplinary engineering team for the development of the Geographic Information System (GIS).' },
          { img: '/gallery/team_spacefarm.jpeg', caption: 'With the Space Farm team at the NASA Space Apps Challenge hackathon.' },
          // Add more images here
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "es",
    react: {
      useSuspense: true, // ¡Muy importante para que funcione con Suspense!
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
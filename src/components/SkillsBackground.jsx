// src/components/SkillsBackground.jsx

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const SkillsBackground = () => {
    // Esta función se encarga de cargar el motor de partículas
    const particlesInit = useCallback(async (engine) => {
        console.log('Inicializando tsparticles...', engine);
        // Carga la versión 'slim' que es más ligera
        await loadSlim(engine);
    }, []);

    // Array con las rutas a tus iconos en la carpeta 'public/icons'
    // ¡He añadido todos tus skills, incluidos los últimos!
    const skillIcons = [
        '/icons/react.svg',
        '/icons/javascript.svg',
        '/icons/python.svg',
        '/icons/django.svg',
        '/icons/nextdotjs.svg',
        '/icons/typescript.svg',
        '/icons/java.svg',
        '/icons/php.svg',
        '/icons/html5.svg',
        '/icons/css.svg',
        '/icons/git.svg',
        '/icons/github.svg',
        '/icons/nodedotjs.svg',
        '/icons/mysql.svg',
        '/icons/sqlite.svg',
        '/icons/postgresql.svg',
        '/icons/bootstrap.svg',
    ];

    const particleOptions = {
        background: {
            color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
            },
            modes: {
                bubble: {
                    distance: 100,
                    duration: 2,
                    opacity: 1,
                    size: 40,
                },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            move: {
                direction: "bottom",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: { enable: true },
                value: 20, // Aumenté un poco el número para que se vean más iconos
            },
            opacity: {
                value: 0.4,
            },
            shape: {
                type: "image",
                image: skillIcons.map(iconPath => ({
                    src: iconPath,
                    width: 100,
                    height: 100,
                })),
            },
            size: {
                value: { min: 15, max: 30 },
            },
        },
        detectRetina: true,
    };

    console.log('Renderizando SkillsBackground, skillIcons:', skillIcons);
    return (
        // ¡Sin estilos! Ocupará el 100% de su contenedor padre .background-layer
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleOptions}
        />
    );
};

export default SkillsBackground;
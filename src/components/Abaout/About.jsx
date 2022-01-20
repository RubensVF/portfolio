import React from 'react';
import './about.scss';

const About = () => {
    return (
        <section id='about'>
            <h1>
                Acerca de
            </h1>
            <p>
                Hola soy Rubén y disfruto crear cosas que están en internet. Mi interés por el desarrollo web
                comenzó averiguando como funciona la tecnología que todos utilizamos en la actualidad he avanzado
                bastante en este campo y me encantaría compartir el conocimiento que he recopilado.
            </p>
            <h2>
                Tecnologías que he utilizado.
            </h2>
            <ul>
                <li>Frontend: HTML, CSS, Javascript/ReactJS, Sass,MaterialUI, Tailwindcss</li>
                <li>Backend: JAVA/Spring/SpringBoot, C/C++, Python, Nodejs/Typescript</li>
                <li>Despliegue: Linux,Docker,GIT</li>
            </ul>

        </section>
    );
};

export default About;
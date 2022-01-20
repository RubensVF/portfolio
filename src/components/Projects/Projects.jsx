import React from 'react';
import Project from './Project/Project';
import './projects.scss';
const Projects = () => {
    return (
        <section id='projects'>
            <h1>Projects</h1>
            <div className='gridContainer'>
                <Project title="Notes App"
                        img="static/notes.png" 
                        description="Crud construido con Spring Boot y thymeleaf"
                        tech={['My sql','Spring Boot','Thymeleaf','Bootstrap']}
                        code="https://github.com/RubensVF/notes-thymeleaf"
                        demo="http://notes.rubenvelazquez.com/"/>
            </div>

        </section>
    );
};

export default Projects;
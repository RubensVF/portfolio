import React from 'react';
import './project.scss'
const Project = (props) => {
    return (
        <div className="cardContainer">
            <img src={props.img} alt="" />
            <div className='cardContent'>
            <h3>
                {props.title}
            </h3>
            <h4>{props.description}</h4>
            <div className='thecnology'>
                {props.tech.map((tech)=>{
                    return <span key={tech}>{tech}</span>
                })}
            </div>
            <div className='options'>
                <a href={props.code}>Code</a>
                <a href={props.demo}>Demo</a>
                </div>
            </div>
        </div>
    );
};

export default Project;
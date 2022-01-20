import React from 'react';
import './hero.scss';

const Hero = () => {
    return (
        <section id="hero-section">
            <div className='hero'>
                Hola, soy
                <span className='name'> Rubén </span>
                desarollador
                <div className="description">
                    Soy un programador jr web orientado a backend.
                </div>
            </div>

        </section>
    );
};

export default Hero;
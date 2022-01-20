import React, { useEffect } from 'react';
import { useRef } from 'react';
import './canvas.scss';
import World3D from './Utils/World3D';

const Canvas = () => {
    const canvasref = useRef(null);
    useEffect(() => {
        const maxHeight = document.documentElement.offsetHeight;
        const world = new World3D(canvasref.current);
        document.onscroll = ()=>{
            const t = document.body.getBoundingClientRect().top;
            world.scroll(t,maxHeight);
        }
        window.addEventListener('resize',()=>{
            world.resize();
        });
        window.addEventListener( 'click', (event)=>{
            const x = ( event.clientX / window.innerWidth ) * 2 - 1;
	        const y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            world.mouseMove(x,y);
        }, false );
    }, [canvasref])
    return (
        <canvas ref={canvasref}>
        </canvas>
    );
};
export default Canvas;
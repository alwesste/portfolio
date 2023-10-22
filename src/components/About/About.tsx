import React, { useEffect } from 'react';
import { presentation } from '../../assets/variables/variables';
import './About.scss';

const About: React.FC = () => {

    useEffect(() => {
        const ball = document.querySelector('.ball') as HTMLElement;
        
        document.addEventListener("mousemove", function(event) {
            mouseX = event.clientX;
            mouseY = event.clientY;            
            ball.style.opacity = '1'

        });
        
        let mouseX = window.innerWidth / 2; 
        let mouseY = window.innerHeight / 2; 
        let ballX = mouseX;
        let ballY = mouseY;
        
        let speed = 0.2;
        
        function animate() {
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;
            ballX = ballX + (distX * speed);
            ballY = ballY + (distY * speed);
            
            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";

            requestAnimationFrame(animate);
        }

        animate();
               

    
    }, []);

    return (
        <div className='aboutContainer'>
            <div className='ball' ></div>
            <div className='parallax1'></div>
            <h1 className='aboutContainer-title' id='about'>
                About me
            </h1>
            <p className='aboutContainer-presentation'>{presentation}</p>
            <div className='parallax2'></div>
        </div>
    );
};

export default About;

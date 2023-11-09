import React, { useEffect, useRef, useState } from 'react';
import { presentation } from '../../assets/variables/variables';
import { useTheme } from '../utils/ThemeContext';
import Typewriter from 'typewriter-effect/dist/core';

import './About.scss';

const About: React.FC = () => {

    const {isDarkMode} = useTheme()

   
    const [isVisible, setIsVisible] = useState(false)
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    
    const handleVisibility = () => {
            setIsVisible(!isVisible)
            console.log('ok')
    }


    useEffect(() => {
        
        const p1 = p1Ref.current;
        const p2 = p2Ref.current;


        new Typewriter(p1, {})
            .changeDelay(50)
            .typeString('Développeur front-end')
            .start();

        new Typewriter(p2, {})
            .changeDelay(30)
            .typeString('Création moderne et responsive pour le web')
            .start()
            

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
        <div className='about'>

            <div className='aboutContainer'>
                <div className='ball' ></div>
                <div className='aboutContainer' id='about'>
                    <div className='aboutContainer-aboutme'>
                        <h2 className='aboutContainer-aboutme-name'>Leopold Dagorn</h2>
                        <p ref={p1Ref}></p>
                        <p ref={p2Ref}></p>                       
                        <h3 className={`comment ${isDarkMode && 'dark-comment' }`} onClick={handleVisibility}>Pour en savoir plus sur moi</h3>

                    </div>  
                                        
                    <div className='aboutContainer2'>                    
                    <p className={`aboutContainer-presentation ${isVisible ? 'visible' : ''}`}>{presentation}</p>
                        <p className={`aboutContainer-accroche ${isVisible ? 'visible' : ''}`}>"En tant que développeur web passionné, je jongle avec les langages de programmation pour donner vie à des idées sur l'écran, chaque jour est une nouvelle aventure digitale."</p>
                    </div>

                </div>

            </div> 
            
            <div className="parallax"></div>    

        </div>
        
    );
};

export default About;

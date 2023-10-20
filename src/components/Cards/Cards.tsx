import React, { useEffect } from 'react';

import {cards} from "../../assets/variables/variables"
import "./Cards.scss"
 

const Cards: React.FC = () => {

    useEffect(() => {

        let observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.animate(
                        [
                            { opacity: 0 },
                            { opacity: 1 },
                        ],
                        {
                            duration: 1000
                        }
                    );
                    observer.unobserve(entry.target);
                }
            } 
        },);
        
        const elementsToObserve = document.querySelectorAll('.card-text');
        elementsToObserve.forEach((element) => {
        observer.observe(element);
        
        });
        
        const tiltCards = document.querySelectorAll('.card-Img') as NodeListOf<HTMLDivElement>;

        tiltCards.forEach((card) => {
            card.addEventListener('mousemove', (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const xAxis = (e.clientX - cardCenterX) / 30;
                const yAxis = (e.clientY - cardCenterY) / 30;

                card.style.setProperty("--rotateX", -1 * yAxis + "deg");
                card.style.setProperty("--rotateY", xAxis + "deg");            
            });
    
            card.addEventListener('mouseleave', () => {
                card.style.removeProperty("--rotateX");
                card.style.removeProperty("--rotateY");
            });
        });          
    },[]);    

    
    return (
        
        <section className="project" id="my-works">

            <h1 className="project-title">My Works</h1>

            <div className="cardContainer">
                {cards.map((card, index) => (
                    <div className={`card ${index % 2 === 0 ? "card-even" : "card-odd"}`} key={index}>
                        <img className="card-Img" src={card.img} alt={`Card ${index}`} />
                        <div className='card-text'>
                            <h1 className='card-title'>
                            {card.title}</h1>
                            <p className={`card-description`}>
                            {card.text}</p>
                        </div>
                        
                    </div>
                ))}            
            </div>
           

        </section>
        
    )
}

export default Cards
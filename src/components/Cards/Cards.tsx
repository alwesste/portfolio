import React, { useEffect } from 'react';

import "./Cards.scss"
import events from "../../assets/images/77events.png"
import argentBank from "../../assets/images/argentBank.png"
import booki from "../../assets/images/booki.png"
import kasa from "../../assets/images/kasa.png"
import ohmyfood from "../../assets/images/ohmyfood.png"
import printit from "../../assets/images/printit.png"
import sophie from "../../assets/images/sophie.png"



const Cards: React.FC = () => {

    useEffect(() => {
        const tiltCards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
    
        tiltCards.forEach((card) => {
            card.addEventListener('mousemove', (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const xAxis = (e.clientX - cardCenterX) / 10;
                const yAxis = (e.clientY - cardCenterY) / 10;

                card.style.setProperty("--rotateX", -1 * yAxis + "deg");
                card.style.setProperty("--rotateY", xAxis + "deg");            
            });
    
            card.addEventListener('mouseleave', () => {
                card.style.removeProperty("--rotateX");
                card.style.removeProperty("--rotateY");
            });
        });
    }, []);


 
    const cards = [events, argentBank, booki, kasa, ohmyfood, printit, sophie];

    return (
        
        <section className="project" id="my-works">

            <h1 className="project-title">My Works</h1>

            <div className="cardContainer">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img className="card-Img" src={card} alt={`Card ${index}`} />
                    </div>
                ))}
            </div>

        </section>
        
    )
}

export default Cards
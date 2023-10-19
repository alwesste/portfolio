import React, { useEffect } from 'react';

// import {cards} from "../../assets/variables/variables"
import "./Cards.scss"
import events from "../../assets/images/77events.png"
import argentBank from "../../assets/images/argentBank.png"
import booki from "../../assets/images/booki.png"
import kasa from "../../assets/images/kasa.png"
import ohmyfood from "../../assets/images/ohmyfood.png"
import printit from "../../assets/images/printit.png"
import sophie from "../../assets/images/sophie.png"

// const workPresentation: Array<{ test: string }> = [
//     {
//       test: "je suis un texte"
//     }
//   ];
  

const Cards: React.FC = () => {

    useEffect(() => {
        const tiltCards = document.querySelectorAll('.card-Img') as NodeListOf<HTMLDivElement>;
    
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

        const cards = [
            { img: events, text: "Texte pour la carte 1" },
            { img: argentBank, text: "Texte pour la carte 2" },
            { img: booki, text: "Texte pour la carte 3" },
            { img: kasa, text: "Texte pour la carte 4" },
            { img: ohmyfood, text: "Texte pour la carte 5" },
            { img: printit, text: "Texte pour la carte 6" },
            { img: sophie, text: "Texte pour la carte 7" }
        ];
      

    return (
        
        <section className="project" id="my-works">

            <h1 className="project-title">My Works</h1>

            <div className="cardContainer">
                {cards.map((card, index) => (
                    <div className={` ${index % 2 === 0 ? "card-even" : "card-odd"}`} key={index}>
                        <img className="card-Img" src={card.img} alt={`Card ${index}`} />
                        <p className='card-text'>{card.text}</p>
                    </div>
                ))}            
            </div>
           

        </section>
        
    )
}

export default Cards
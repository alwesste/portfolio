import React, { useEffect, useState } from 'react';
import { githubLink } from "../../assets/variables/variables"
import { cardAPI } from '../utils/api';
import Button from "../../Button/Button"

import "./Cards.scss"

type CardsData = {
    id: number;
    attributes: {
      title: string;
      image: {
        url: string;
      };
      cardProject: string;
    };
  };
 

const Cards: React.FC = () => {

    const [cardsData, setCardsData] = useState<CardsData[]>([]);


    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await cardAPI();
                console.log(response)
                if (response.success) {
                    setCardsData(response.data.data);

                } else {
                    // Handle the case where the API call failed
                }
            } catch (error) {
                // Handle any errors that occur during the API call
            }
        };

        fetchData();
        let observer = new IntersectionObserver((entries) => {
            console.log(entries)
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.animate(
                        [
                            { transform: "translateY(50px)", opacity: 0 },
                            { transform: "translateY(0px)", opacity: 1 },
                        ],
                        {
                            duration: 500
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
    },[]);    

    
    return (
        <section className="project" id="my-works">
        <h1 className="project-title">My Works</h1>
        <div className="cardContainer">
            {cardsData.map((card, index) => {
                console.log(card.attributes.image.data[0].attributes.url); // Ajoutez cette ligne pour le débogage
                return (
                    <div className={`card ${index % 2 === 0 ? "card-even" : "card-odd"}`} key={index}>
                        <img className="card-Img" src={`http://localhost:1337${card.attributes.image.data[0].attributes.url}`} alt={`Card ${index}`} />
                        <div className='card-text'>
                            <h2 className='card-title'>
                                {card.attributes.title}
                            </h2>
                            <p className={`card-description`}>
                                {card.attributes.cardProject}
                            </p>
                            <Button link={githubLink[index].link} />
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
    )
}

export default Cards
import React, { useEffect, useState } from 'react';
import { cardAPI } from '../utils/api';
import Button from "../Button/Button"
import "./Cards.scss"

type CardsData = {
    id: number;
    attributes: {
      githubLink: string;
      title: string;
      image: {
        data: {
            attributes: {
                url: string;
            }
        }[];
      };
      cardProject: string;
    };
  };
 

const Cards: React.FC = () => {

    const [cardsData, setCardsData] = useState<CardsData[]>([]);

    

    const handleConsole = (index) => {
        const description = document.querySelector(`.card-description${index}`);
        if (description) {
            if (description.style.opacity === '0') {
                description.style.opacity = '1';
            } else {
                description.style.opacity = '0';
            }
        }
    }

    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await cardAPI();
                if (response.success) {
                    setCardsData(response.data.data);

                } else {
                    console.log('data unavailable')
                }
            } catch (error) {
                console.error('Error fetching data:', error); 
}
        };

        fetchData(); 
                 
    },[]);  

    
    let observer = new IntersectionObserver((entries) => {
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


    return (
        <section className="project" id="my-works">
        <h1 className="project-title">My Works</h1>
        <div className="cardContainer">
            {cardsData.map((card, index) => (
                    <div className={`card ${index % 2 === 0 ? "card-even" : "card-odd"}`} key={index}>
                        <img className="card-Img" 
                            src={`http://localhost:1337${card.attributes.image.data[0].attributes.url}`} 
                            alt={`Card ${index}`} />
                        <div className='card-text'>
                            <h2 className='card-title'>
                                {card.attributes.title}
                            </h2>
                            <p className={`card-description${index}`}>
                                {card.attributes.cardProject} 
                            </p>
                            <Button link={card.attributes.githubLink} />
                            <button className={`card-description-change ${index}`}
                            onClick={()=> handleConsole(index)}
                            >Voir les tech</button>
                        </div>
                    </div>
                )
            )}
        </div>
    </section>
    )
}

export default Cards
import React, { useEffect, useState, useRef } from 'react';
import { cardAPI } from '../utils/api';
import Button from "../Button/Button";
import { useTheme } from '../utils/ThemeContext';
import "./Cards.scss"

interface CardsData {
    id: number;
    attributes: {
      githubLink: string;
      title: string;
      cardProject: string;
      image: {
        data: {
            attributes: {
                url: string;
            }
        }[];
     };
    
      logo: {
        data: {
          attributes: {
              url: string;
            };
        }[];
    };  
    };
  };
 

const Cards: React.FC = () => {

    const [cardsData, setCardsData] = useState<CardsData[]>([]);
    const {isDarkMode} = useTheme()


    const handleConsole = (index: number) => {
        const description = document.querySelector(`.card-description${index}`) as HTMLElement | null;
        const logo = document.querySelector(`.card-logo-container${index}`) as HTMLElement | null;

        if (description?.style?.opacity === '0' && logo?.style?.opacity === '1') {
            description.style.opacity = '1';
            logo.style.opacity = '0'
        } else {
            description?.style.setProperty('opacity', '0');
            logo?.style.setProperty('opacity', '1');

        }
    
    }

    const descriptionRef = useRef(null);

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
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.animate(
                    [
                        { transform: "translateY(50px)", opacity: 0 },
                        { transform: "translateY(0px)", opacity: 1 },
                    ],
                    {
                        duration: 500
                    }
                ).onfinish = () => {
                   (entry.target as HTMLElement).style.opacity = "1";
                }
                ;
                observer.unobserve(entry.target);
            }
        });
    });
    
    const elementsToObserve = document.querySelectorAll('.card-text');
    const elementsToObserve2 = document.querySelectorAll('.card-Img');
    
    elementsToObserve.forEach((element) => {
        observer.observe(element);
    });
    
    elementsToObserve2.forEach((element) => {
        observer.observe(element);
    });
    
    const tiltCards = document.querySelectorAll('.card-Img') as NodeListOf<HTMLDivElement>;

        tiltCards.forEach((card) => {
            card.addEventListener('mousemove', (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const xAxis = (e.clientX - cardCenterX) / 5;
                const yAxis = (e.clientY - cardCenterY) / 5;

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
                            <img className={`card-Img ${isDarkMode ? 'low-box-shadow' : ''}`}
                                src={`http://35.180.255.7:1337${card.attributes.image.data[0].attributes.url}`} 
                                alt={`Card ${index}`} />
                        <div className={`card-text ${isDarkMode ? 'light-text' : 'dark-text'}`}>
                                <h2 className='card-title'>
                                    {card.attributes.title}
                                </h2>
                                <p ref={descriptionRef} className={`card-description${index}`}>
                                    {card.attributes.cardProject} 
                                </p>
                                <div className={`card-logo-container${index}`}>
                                    {card.attributes.logo.data.map((logo, logoIndex: number) => (
                                    <img
                                        key={logoIndex}
                                        className='logo'
                                        src={`http://35.180.255.7:1337${logo.attributes.url}`}
                                        alt={`Logo ${logoIndex}`}
                                    />
                                ))}
                                </div>
                                <div className='card-button'>
                                    <Button link={card.attributes.githubLink} />
                                    <Button appear={true} className={`card-description-change ${index} ${isDarkMode ? 'light-text' : 'dark-text' }`}
                                        onClick={() => handleConsole(index)}/>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
        
}

export default Cards
import "./Skills.scss"
import { useEffect, useState } from "react"
// import { logos } from "../../assets/variables/variables";
import { logoAPI } from "../utils/api";
import { useTheme } from "../utils/ThemeContext";

interface LogoData {
    attributes: {          
        title: string;
        logo: {
          data: [
            {
              attributes: {
                url: string;
              };
            }
          ];
        };
      };
  }
  
interface LogoResponse {
    data: LogoData[];
}

const Skills : React.FC = () => {

const [isLogo, setIsLogo] = useState<LogoData[]>([]);
const {isDarkMode} = useTheme()


    useEffect(() => {

        const fetchDataLogo = async () => {
            try {
              const response: LogoResponse = await logoAPI();
          
              setIsLogo(response.data);
            } catch (error) {
              console.error('Error fetching data:', error); 
            }
          };
          
          fetchDataLogo();

    },[])
    useEffect(() => {

    })

    const observeLogoElements = () => {
      const listSkill = document.querySelectorAll('.container-skill-list li')

      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.animate(
              [
                { transform: "translateX(150px)", opacity: 0 },
                { transform: "translateX(0px)", opacity: 1 },
              ],
              {
                duration: 500,
              }
            ).onfinish = () => {
              (entry.target as HTMLElement).style.opacity = "1";
              observer2.unobserve(entry.target);
            };
          }
        });
      }, { threshold: 0 });
    
      listSkill.forEach((element) => {
        observer2.observe(element);
      });

      const resumeParagraph = document.querySelector(".resume-paragraph")as HTMLElement | null;
      const logoElements = document.querySelectorAll('.flip-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.animate(
                [
                  { transform: "translateY(50px)", opacity: 0 },
                  { transform: "translateY(0px)", opacity: 1 },
                ],
                {
                  duration: 500,
                }
              ).onfinish = () => {
                (entry.target as HTMLElement).style.opacity = "1";
              };
            }, index * 200); 
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0 });

      if (resumeParagraph) {
        observer.observe(resumeParagraph);
      }      
      
      logoElements.forEach((element) => {
        observer.observe(element);
      });
    };

    const myCV = document.querySelector(".CV") as HTMLElement | null

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry)=> {
        setTimeout(() => {
          if (entry.isIntersecting) {
          entry.target.animate(
            [
              { transform: "scale(0.2)", opacity: 0 },
              { transform: "scale(1)", opacity: 1 },
            ],
            {
              duration: 500,
            }
          ).onfinish = () => {
            (entry.target as HTMLElement).style.opacity = "1";
            observer3.unobserve(entry.target);
          };
        }  
        }, 500);
      
      });
    }, { threshold: 0 })

    if (myCV) {
      observer3.observe(myCV)
    }
    observeLogoElements();

  // const CV = "../../assets/images/Leopold_Dagorn.pdf"


    return (
    <div className="container">
        <h1 className="container-title" id="competences">My Skills</h1>
        <h2 className="container-title2">Technologies utilisées :</h2>

        <div className="container-group">
            <div className="container-logo">
              {isLogo.map((logo, index) => (
                  <div className="flip-card"
                      key={index}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <img
                                className="container-logo-img"
                                src={`https://leopolddagorn.fr${logo.attributes.logo.data[0].attributes.url}`}
                                alt={`technologie ${logo.attributes.logo.data[0].attributes.url}`}
                            />
                          </div>   
                                          
                          <div className={`flip-card-back ${isDarkMode && 'flip-card-back-light'}`}><p>{logo.attributes.title}</p></div>

                        </div>
                  </div>
              ))}

          </div>

            {/* <div className="container-logo">
              {logos.map((logo, index) => (
                  <div className="flip-card"
                      key={index}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <img
                                className="container-logo-img"
                                src={logo.logo}
                                alt={`technologie ${index}`}
                            />
                          </div>   
                                          
                          <div className={`flip-card-back ${isDarkMode && 'flip-card-back-light'}`}><p>{logo.title}</p></div>

                        </div>
                  </div>
              ))}

          </div> */}
          <div className="container-skill">
            <ul className="container-skill-list">
              <li>Référencement SEO</li>
              <li>Méthode agile</li>
              <li>Accessibilité</li>              
              <li>Adaptibilité</li> 
            </ul>
            <ul className="container-skill-list">
              <li>Autonome</li>
              <li>Curieux</li> 
              <li>Créatif</li>
              <li>Passionné</li>
              <li>Organisé</li>
              <li>Rigoureux</li>
            </ul>
          </div>

        </div>       
        

        <section id="resume" className="resume parallaxSkill">
          <h1 className="resume-title">My Resume</h1>
          <p className="resume-paragraph">Découvrez mon profil et parcours complet, en téléchargeant mon CV          
            {/* <a className={`CV ${isDarkMode && 'light'}`} href={CV}>My resume</a> */}
          </p>
        </section>
    </div>
);
}

export default Skills
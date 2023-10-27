import "./Skills.scss"
import { useEffect, useState } from "react"
import { logoAPI } from "../utils/api";

interface LogoData {
    attributes: {
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

        let observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.animate(
                        [
                            { transform: "translateY(50px)", opacity: 0 },
                            { transform: "translateY(0px)", opacity: 1 },
                        ],
                        {
                            duration: 400
                        }
                    );
                    observer.unobserve(entry.target);
                }
            } 
        },);
        
        const element = document.querySelector('.container-logo');
        
        if (element){

        observer.observe(element);
    }
    },[])

    return (
        <div className="container">
            <h1 className="container-title" id="competences">My Skills</h1>
            <h2 className="container-title2">Technologies utilisees :</h2>
                <div className="container-logo">
                    {isLogo.map((logo, index) => (
                        <img className="container-logo-img" src={`http://localhost:1337${logo.attributes.logo.data[0].attributes.url}`} 
                        alt={`technologie ${logo.attributes.logo.data[0].attributes.url}`}key={index} />
                    )
                    )}

                </div>


        </div>

    )
}

export default Skills
import "./Skills.scss"
import { useEffect } from "react"
import {logos} from "../assets/variables/variables"

const Skills : React.FC = () => {

    useEffect(() => {
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
                {logos.map((logo, index) => (
                    <img className="container-logo-img" src={logo.logo} alt={`technologie ${logo.logo}`}key={index} />
                )
                )}

            </div>


        </div>

    )
}

export default Skills
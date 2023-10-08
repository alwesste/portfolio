import "./Cards.scss"
import events from "../../assets/images/77events.png"
import argentBank from "../../assets/images/argentBank.png"
import booki from "../../assets/images/booki.png"
import kasa from "../../assets/images/kasa.png"
import ohmyfood from "../../assets/images/ohmyfood.png"
import printit from "../../assets/images/printit.png"
import sophie from "../../assets/images/sophie.png"

const Cards: React.FC = () => {

    return (
        

        <section className="project" id="my-works">

            <h1 className="project-title">My projects</h1>


                <div className="cardConteiner">

                    
                    <div className="card">
                        <img className="card-Img" src={events} alt="site web de 77Events" />   
                    </div>  

                    <div className="card">
                        <img className="card-Img" src={argentBank} alt="site web de argentBank" />   
                    </div>  

                    <div className="card">
                        <img className="card-Img" src={booki} alt="site web de Booki" />   
                    </div> 

                    <div className="card">
                        <img className="card-Img" src={kasa} alt="site web de kasa" />   
                    </div> 

                    <div className="card">
                        <img className="card-Img" src={ohmyfood} alt="site web de ohmyfood" />   
                    </div>  
                    
                    <div className="card">
                        <img className="card-Img" src={printit} alt="site web de print it" />   
                    </div> 

                    <div className="card">
                        <img className="card-Img" src={sophie} alt="site web de sophie bluel" />   
                    </div>   
                </div>
        </section>
        

    )
}

export default Cards
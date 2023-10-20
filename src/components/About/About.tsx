import './About.scss'
import { presentation } from '../../assets/variables/variables'
const About: React.FC = () => {

   

    return (

        <>
            <div className='aboutContainer'>
                <div className='parallax'></div>
                <h1 className='aboutContainer-title' id='about'>About me</h1>
                <p className='aboutContainer-presentation'>{presentation}</p>

            </div>
        
        </>

    )
}

export default About
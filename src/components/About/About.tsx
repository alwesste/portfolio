import './About.scss'
import { presentation } from '../../assets/variables/variables'

const About: React.FC = () => {

   

    return (

        <>
            <div className='aboutConteiner'>

                <h1 className='aboutConteiner-title' id='about'>About me</h1>
                <p className='aboutConteiner-presentation'>{presentation}</p>

            </div>
        
        </>

    )
}

export default About
import "./footer.scss"
import reactAndVite from "../../../public/images/reactVite.png"

const Footer: React.FC = () => {

    return (
        <>
            <div className="footer">
                <p>Mady with and host on</p>                
                <img className="footer-logo" src={reactAndVite} alt="logo of react and vite" />                

            </div>
        </>
    )
}

export default Footer
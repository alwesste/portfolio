import "./footer.scss"
import reactAndVite from "../../assets/logo/reactVite.png"

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
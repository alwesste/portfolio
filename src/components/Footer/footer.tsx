import "./footer.scss"
import reactAndVite from "../../assets/logo/logoVite.svg"

const Footer: React.FC = () => {

    return (
        <>
            <div className="footer">
                <p>Mady with <img className="footer-logo" src={reactAndVite} alt="logo of react and vite" />                
                    and hosted on
                </p>                

            </div>
        </>
    )
}

export default Footer
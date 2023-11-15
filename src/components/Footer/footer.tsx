import "./footer.scss"
import { useState, useEffect } from "react";
import { logoAPI } from "../utils/api"
import { useTheme } from "../utils/ThemeContext";


interface LogoResponse {
    data: LogoData[];
}

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
  

const Footer: React.FC = () => {
    
    const {isDarkMode} = useTheme()
    const [isLogo, setIsLogo] = useState<LogoData[]>([]);
    console.log(isLogo)

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
    }, []);

    const viteUrl = isLogo.length > 0 ? isLogo[0].attributes.logo.data[0].attributes.url : '';
    const awsUrl = isLogo.length > 0 ? isLogo[10].attributes.logo.data[0].attributes.url : '';

    return (
        <>
            <div className={`footer ${isDarkMode && 'darkmode'}`}>
                <p>Mady with 
                    <img className="footer-logo" src={`:1337${viteUrl}`} alt="logo of vite" />
                    and hosted on 
                    <img className="footer-logo" src={`http://174.129.175.245:1337${awsUrl}`} alt="logo of AWS" />
                </p>
            </div>
        </>
    )
}

export default Footer;
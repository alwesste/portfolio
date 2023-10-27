import "./Button.scss"

interface ButtonProps {
    link: string;
  }


const Button: React.FC<ButtonProps> = ({ link }) => {

    return (
       
        <div className="button-container">
            <a className="button-text" href = {link} target="_blank" >Telecharger le projet</a>
        </div>
    )
}

 
export default Button
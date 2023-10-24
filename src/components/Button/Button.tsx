import "./Button.scss"

const Button: React.FC = ({link}) => {

    return (
       
        <div className="button-container">
            <a className="button-text" href = {link} target="_blank" >Telecharger le projet</a>
        </div>
    )
}

 
export default Button
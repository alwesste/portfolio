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

// import React from 'react';
// import "./Button.scss"

// interface ButtonProps {
//     link?: string;
//     appear?: boolean;
//     onClick?: () => void; // Ajoutez cette prop onClick
// }

// const Button: React.FC<ButtonProps> = ({ link, appear, onClick, index}) => {
//     return (
//         <div className="button-container">
//             {appear ? (
//                 <div className={`button-appear ${index}`} onClick={onClick}>Voir les tech</div>
//                 ) : (
//                 <a className="button-text" href={link} target="_blank">Telecharger le projet</a>
//             )}
//         </div>
//     )
// }

// export default Button;

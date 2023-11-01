import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import "./Button.scss"

interface ButtonProps {
    className?: string;
    link?: string;
    appear?: boolean;
    onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ link, appear, onClick, className}) => {

    const {isDarkMode} = useTheme()
    return (
        <div className='button-container'>
            {appear ? (
                <div className={className} onClick={onClick}>Voir les techno utilisees</div>
                ) : (
                <a className={`button-text ${isDarkMode ? 'light-text' : 'dark-text' }`} href={link} target="_blank">Telecharger le projet</a>
            )}
        </div>
    )
}

export default Button;

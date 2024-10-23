import React from 'react';
import './Buttom.css';
import {Link} from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btm--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    ButtonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLE[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0]

    return(
        <Link to ='/recycles' className ='btn-mobile'>
        <button 
            className = {`btn ${checkButtonSize} ${checkButtonSize}`}
            onclick = {onClick}
            type = {type}
            >
                {children}
        </button>
        </Link>
    )
};
import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

const Button = (props) =>{
 const CheckButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
 const CheckButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];
  return (
    <>
   <div className='btn-mobile'>
   <button
    className = {`btn ${CheckButtonStyle} ${CheckButtonSize}`}
    onClick={props.onClick}
    type = {props.type}
    >
    {props.children}
    </button>
   </div>
    </>
  )
};
export default Button;

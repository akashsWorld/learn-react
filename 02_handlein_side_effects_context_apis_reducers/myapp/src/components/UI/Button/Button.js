import React from 'react';

import classes from './Button.module.css';

const Button = ({onClick,disabled,children,type,className}) => {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

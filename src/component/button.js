import React from 'react';

const Button = ({ children, google, ...otherProps}) => {
  return (
    <button className={`btn m-2 px-5 ${google ? 'btn-outline-primary' : 'btn-outline-success' }`} {...otherProps}>
      { children }
    </button>
  );
}

export default Button;
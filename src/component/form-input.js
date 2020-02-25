import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
      <input 
        onChange={handleChange}
        {...otherProps}/>
  );
}

export default FormInput;
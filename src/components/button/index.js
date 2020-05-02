import React from 'react';

const Button = ({ text, fn }) => (
  <button type="button" onClick={fn}>
    {text}
  </button>
);

export default Button;

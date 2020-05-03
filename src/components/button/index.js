import React from 'react';
import { Container } from '~/styles/components/button';

const Button = ({ text, active, fn }) => {
  return (
    <Container type="button" onClick={fn} className={active ? 'active' : ''}>
      {text}
    </Container>
  );
};

export default Button;

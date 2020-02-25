import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
    <p className="lead text-center">
      &copy; Online shop where you can purchase electronic devices.
    </p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 50px 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
 background-blend-mode: multiply,multiply;
 color: #fff;
`;

export default Footer;
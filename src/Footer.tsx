// src/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #f7f7f7;
  border-top: 1px solid #ccc;
  margin-top: auto; /* Pushes footer to the bottom */
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Q-Squared. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
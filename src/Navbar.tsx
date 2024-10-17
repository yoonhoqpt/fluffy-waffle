// src/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 1rem 2rem;
  border-bottom: none; 
`;

const Logo = styled.h2`
  color: #000;
  margin: 0 2rem 0 0;
  font-weight: bold;
  cursor: pointer;
`;

const NavItem = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  
  &:hover {
     background-color: #000;
    color: #fff;
  }
`;

const SignInButton = styled(Link)`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
  text-decoration: none; /* Remove underline */

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const NavbarContainer: React.FC = () => {
  return (
    <Navbar>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>Q-Squared</Logo>
        </Link>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/jobs">Jobs</NavItem>
        <NavItem to="/contact">Contact Us</NavItem>
        <NavItem to="/employers">Employers</NavItem>
        </div>
        <SignInButton to="/signin">Sign In</SignInButton> {/* Updated Link */}
    </Navbar>
  );
};

export default NavbarContainer;
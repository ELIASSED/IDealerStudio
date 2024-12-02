// src/components/Header.tsx


import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`

  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #b72e2e; 
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #7bbb66;
  margin: 0 15px; /* Ajout de marge horizontale */
`;

const Nav = styled.nav`
  display: flex;
  align-items: center; /* Assure l'alignement vertical si nécessaire */
`;


const Navbar: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo><NavLink  href="/">IDealer</NavLink></Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Navbar;

import React from 'react';
import { StyledHeader, Icon } from './Header.styles';
import Logo from '../../assets/queensolutions.png';
export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <img src={Logo} alt="company logo" />
      </nav>
      <p>Queen Solutions Test</p>
      <Icon data-testid="shopping-icon" />
    </StyledHeader>
  );
}

import React from 'react';
import { StyledHeader, Icon } from './Header.styles';
import Logo from '../../assets/queensolutions.png';

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <img
          src={Logo}
          alt="company logo"
          style={{ width: 100, height: 100 }}
        />
      </nav>
      <p>Queen Solutions Test</p>
      <Icon data-testid="file-Upload-icon" />
    </StyledHeader>
  );
}

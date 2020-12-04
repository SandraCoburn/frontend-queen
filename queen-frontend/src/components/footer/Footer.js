import React from 'react';

import {
  StyledFooter,
  IconContainer,
  LinkIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
} from './Footer.styles';

export default function Footer() {
  return (
    <StyledFooter>
      <IconContainer>
        <LinkIcon data-testid="link-icon" />
        <InstagramIcon data-testid="instagram-icon" />
        <TwitterIcon data-testid="twitter-icon" />
        <FacebookIcon data-testid="facebook-icon" />
        <EmailIcon data-testid="email-icon" />
      </IconContainer>
      <div>
        <a href="#">Terms of Services</a>
        <a href="#">Privacy</a>
      </div>
    </StyledFooter>
  );
}

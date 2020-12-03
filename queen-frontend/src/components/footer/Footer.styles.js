import styled from 'styled-components';
import { Instagram } from '@styled-icons/remix-fill/Instagram';
import { Twitter } from '@styled-icons/remix-fill/Twitter';
import { Facebook } from '@styled-icons/remix-fill/Facebook';
import { Envelope } from '@styled-icons/zondicons/Envelope';

import { Link } from '@styled-icons/heroicons-outline/Link';

export const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  height: 146px;
  left: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  /* link container */
  div {
    display: flex;
    justify-content: space-evenly;
    width: 15%;
    @media (max-width: 768px) {
      width: 60%;
      justify-content: space-evenly;
    }

    a {
      color: #585858;
      text-decoration: none;
      font-size: 0.7em;
      @media (max-width: 768px) {
        font-size: 0.5em;
      }
    }
  }
`;

// container
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  margin: 2% auto;
  @media (max-width: 768px) {
    width: 60%;
    margin: 5% auto;
  }
`;

// icons
export const LinkIcon = styled(Link)`
  height: 0.75em;
  background: #fff;
  color: #121212;
  border-radius: 50%;
  padding: 1%;
`;

export const TwitterIcon = styled(Twitter)`
  height: 0.75em;
  background: #fff;
  color: #121212;
  border-radius: 50%;
  padding: 1%;
`;

export const InstagramIcon = styled(Instagram)`
  height: 0.75em;
  background: #fff;
  color: #121212;
  border-radius: 50%;
  padding: 1%;
`;

export const FacebookIcon = styled(Facebook)`
  height: 0.75em;
  background: #fff;
  color: #121212;
  border-radius: 50%;
  padding: 1%;
`;

export const EmailIcon = styled(Envelope)`
  height: 0.75em;
  background: #fff;
  color: #121212;
  border-radius: 50%;
  padding: 1%;
`;

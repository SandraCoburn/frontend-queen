import styled from 'styled-components';
import { ShoppingBag } from '@styled-icons/heroicons-outline/ShoppingBag';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 10vh;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.2);
  color: #585858;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    font-size: 1.75em;

    letter-spacing: 2px;
  }
  img {
    width: 100px;
    heigth: 100px;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    width: 15%;
    @media (max-width: 768px) {
      display: none;
    }
  }

  a {
    color: #585858;
    text-decoration: none;
    font-size: 0.8em;
  }
`;

export const Icon = styled(ShoppingBag)`
  color: #585858;
  height: 25px;
  width: 15%;
`;

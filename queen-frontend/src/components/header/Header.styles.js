import styled from 'styled-components';
import { FileUpload } from '@styled-icons/fa-solid/FileUpload';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  height: 10vh;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.2);
  color: #585858;
  display: flex;
  align-items: center;
  z-index: 200;
  box-sizing: border-box;

  p {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    font-size: 1.75em;

    letter-spacing: 2px;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    margin: 5%;

    box-sizing: border-box;
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

export const Icon = styled(FileUpload)`
  color: #585858;
  height: 25px;
  width: 15%;
  margin-right: 15%;
`;

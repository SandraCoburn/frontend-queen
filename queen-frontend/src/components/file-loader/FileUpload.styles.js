import styled from 'styled-components';

export const LoaderSection = styled.section`
  width: 70%;
  margin: 7.5% auto;
  display: flex;
  justify-content: center;
  padding: 2%;

  h1 {
    font-size: 1.75rem;
  }
  .p {
    center: align;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100%;
    margin: 56px 0 5%;
  }
  /* Table  */
  .table {
    max-width: 100%;
    width: 80%;
  }
`;

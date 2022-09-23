import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  max-width: ${({ theme }) => theme.pens.maxWidth};
  width: 100%;
`;

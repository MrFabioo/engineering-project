import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 2%;
  transform: translate(-50%);
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;

  svg {
    color: ${({ theme }) => theme.colors.lightGray};
    margin-right: 10px;
  }
`;

export const Bar = styled.div`
  height: 60px;
  width: 4px;
  background-color: #f44336;
  border-radius: 5px;
  margin-right: 15px;
`;

export const FontContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  svg {
    height: 29px;
    color: #f44336;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 18px;
  margin-right: 25px;

  h5 {
    font-weight: bold;
  }

  p {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

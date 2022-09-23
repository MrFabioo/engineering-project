import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 40px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
`;

export const Title = styled.div`
  position: relative;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fonts.xl};
  font-weight: bold;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 0 86px 40px;

  input {
    outline: 0;
    z-index: 1;
    position: relative;
    background: 0;
    width: 100%;
    height: 60px;
    border: 0;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.l};
    font-weight: 300;

    &:focus {
      ~ label {
        color: ${({ theme }) => theme.colors.black};
        transform: translate(-12%, -50%) scale(0.75);
      }

      ~ .bar {
        &:before,
        &:after {
          width: 50%;
        }
      }
    }

    &:valid
    /* OPCION WITCH TYPE='EMAIL' */
    /* ,&.active */ {
      ~ label {
        color: ${({ theme }) => theme.colors.black};
        transform: translate(-12%, -50%) scale(0.75);
      }
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.l};
    font-weight: 300;
    line-height: 60px;
    transition: 0.2s ease;
  }

  .bar {
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 1px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.black};
      width: 0;
      height: 2px;
      transition: 0.2s ease;
    }

    &:before {
      left: 50%;
    }

    &:after {
      right: 50%;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: 0;
  max-width: 315px;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.black};
  padding: 20px 0;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fonts.l};
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  transition: 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Links = styled.footer`
  p {
    cursor: default;
    font-size: ${({ theme }) => theme.fonts.m};
    font-weight: 300;

    a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  p:nth-child(2) {
    margin-top: 10px;
  }
`;

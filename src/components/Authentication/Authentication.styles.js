import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  max-width: ${({ theme }) => theme.pens.maxWidth};
  width: 100%;

  &.active {
    .card {
      &:first-child {
        margin: 0 15px;
      }

      &:nth-child(2) {
        margin: 0 10px;
      }

      &.alt {
        top: 20px;
        right: 0;
        width: 100%;
        min-width: 100%;
        height: auto;
        border-radius: 5px;
        padding: 60px 0 40px;
        overflow: hidden;

        .toggle {
          position: absolute;
          top: 40px;
          right: -70px;
          box-shadow: none;
          transform: scale(10);
          transition: transform 0.3s ease;

          &:before {
            content: '';
          }
        }

        .title,
        .input-container,
        .error-container,
        .button-container {
          left: 0;
          opacity: 1;
          visibility: visible;
          transition: 0.3s ease;
        }

        .title {
          transition-delay: 0.3s;
        }

        .input-container {
          transition-delay: 0.4s;

          &:nth-child(2) {
            transition-delay: 0.5s;
          }

          &:nth-child(3) {
            transition-delay: 0.6s;
          }
        }

        .error-container {
          transition-delay: 0.7s;
        }

        .button-container {
          transition-delay: 0.8s;
        }
      }
    }
  }
`;

export const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 60px 0 40px 0;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s ease;

  &:first-child {
    height: 10px;
    border-radius: 5px 5px 0 0;
    margin: 0 10px;
    padding: 0;
  }

  /* Title */
  .title {
    position: relative;
    z-index: 1;
    border-left: 5px solid ${({ theme }) => theme.colors.accent};
    margin: 0 0 35px;
    padding: 10px 0 10px 50px;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* Inputs */
  .error-container {
    position: relative;
    margin-top: 30px;
  }

  .input-container {
    position: relative;
    margin: 0 60px 50px;

    input {
      outline: none;
      z-index: 1;
      position: relative;
      background: none;
      width: 100%;
      height: 60px;
      border: 0;
      color: ${({ theme }) => theme.colors.black};
      font-size: 24px;
      font-weight: 400;

      &:focus {
        ~ label {
          color: ${({ theme }) => theme.colors.lighterGray};
          transform: translate(-12%, -50%) scale(0.75);
        }

        ~ .bar {
          &:before,
          &:after {
            width: 50%;
          }
        }
      }

      &:valid {
        ~ label {
          color: ${({ theme }) => theme.colors.lighterGray};
          transform: translate(-12%, -50%) scale(0.75);
        }
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      color: ${({ theme }) => theme.colors.lightGray};
      font-size: 24px;
      font-weight: 300;
      line-height: 60px;
      transition: 0.2s ease; //
    }

    .bar {
      position: absolute;
      left: 0;
      bottom: 0;
      background: ${({ theme }) => theme.colors.lightGray};
      width: 100%;
      height: 1px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background: ${({ theme }) => theme.colors.accent};
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
  }

  /* Button */
  .button-container {
    margin: 0 60px;
    text-align: center;

    button {
      outline: 0;
      cursor: pointer;
      position: relative;
      display: inline-block;
      background: 0;
      width: 240px;
      border: 2px solid ${({ theme }) => theme.colors.lighterGray};
      padding: 20px 0;
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.3s ease;

      span {
        position: relative;
        z-index: 1;
        color: ${({ theme }) => theme.colors.lighterGray};
        transition: 0.3s ease;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        background: ${({ theme }) => theme.colors.accent};
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin: -15px 0 0 -15px;
        opacity: 0;
        transition: 0.3s ease;
      }

      &:hover,
      &:active,
      &:focus {
        border-color: ${({ theme }) => theme.colors.accent};

        span {
          color: ${({ theme }) => theme.colors.accent};
        }
      }

      &:active,
      &:focus {
        span {
          color: ${({ theme }) => theme.colors.white};
        }

        &:before {
          opacity: 1;
          transform: scale(10);
        }
      }
    }
  }

  /* Footer */
  .footer {
    margin: 40px 0 0;
    color: ${({ theme }) => theme.colors.lighterGray};
    font-size: 24px;
    font-weight: 300;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  /* Alt Card */
  &.alt {
    position: absolute;
    top: 40px;
    right: -70px;
    z-index: 10;
    width: 140px;
    height: 140px;
    background: none;
    border-radius: 100%;
    box-shadow: none;
    padding: 0;
    transition: 0.3s ease;

    /* Toggle */
    .toggle {
      position: relative;
      background: ${({ theme }) => theme.colors.accent};
      width: 140px;
      height: 140px;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      color: ${({ theme }) => theme.colors.white};
      font-size: 58px;
      line-height: 140px;
      text-align: center;

      &:before {
        font-family: 'Font Awesome 6 Free';
        font-size: 60px;
        content: '\f040';
        font-weight: 900;
      }
    }

    .toggle.active {
      cursor: pointer;
    }

    .title,
    .input-container,
    .error-container,
    .button-container {
      left: 100px;
      opacity: 0;
      visibility: hidden;
    }

    /* Title */
    .title {
      position: relative;
      border-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};

      .close {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 60px;
        display: inline;
        color: ${({ theme }) => theme.colors.white};
        font-size: 58px;
        font-weight: 400;

        &:before {
          font-family: 'Font Awesome 6 Free';
          font-size: 60px;
          content: '\f00d';
          font-weight: 900;
        }
      }
    }

    /* Input */
    .input-container,
    .error-container {
      input {
        color: ${({ theme }) => theme.colors.white};

        &:focus {
          ~ label {
            color: ${({ theme }) => theme.colors.white};
          }

          ~ .bar {
            &:before,
            &:after {
              background: ${({ theme }) => theme.colors.white};
            }
          }
        }

        &:valid {
          ~ label {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }

      label {
        color: rgba(255, 255, 255, 0.8);
      }

      .bar {
        background: rgba(255, 255, 255, 0.8);
      }
      span {
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
        text-align: center;
        line-height: 14px;
      }
    }

    /* Button */
    .button-container {
      button {
        width: 100%;
        background: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.white};

        span {
          color: ${({ theme }) => theme.colors.accent};
        }

        &:hover {
          background: rgba(255, 255, 255, 0.9);
        }

        &:active,
        &:focus {
          &:before {
            display: none;
          }
        }
      }
    }
  }
  /* } */
`;

export const buttonFadeInUp = keyframes`
0% {
      bottom: 30px;
      opacity: 0;
    }
`;

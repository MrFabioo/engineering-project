import { css } from 'styled-components';

export const theme = {
  colors: {
    accent: '#ED2553',
    white: '#ffffff',
    black: '#000000',
    darkGray: 'lighten($black, 20%)',
    gray: '#6d6d6d',
    lightGray: '#757575',
    lighterGray: '#9d9d9d',
  },

  pens: {
    primary: '#363636',
    accent: '#ed2553',
    maxWidth: '460px',
  },
};

export const materialShadow = ({ level }) => css`
  @if $level == 1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  } @else if $level == 2 {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  } @else if $level == 3 {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  } @else if $level == 4 {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } @else if $level == 5 {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

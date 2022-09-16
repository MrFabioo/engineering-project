import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import App from '../components/App';

const AppProviders = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

export default AppProviders;

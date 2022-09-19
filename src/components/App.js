import React from 'react';
import Authentication from './Authentication/Authentication';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import { AuthProvider } from '../contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Authentication />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

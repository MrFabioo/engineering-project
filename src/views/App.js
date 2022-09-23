import { ThemeProvider } from 'styled-components';
import LoginPanel from '../components/LoginPanel/LoginPanel';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPanel from '../components/RegisterPanel/RegisterPanel';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Routes>
            <Route exact path='/login' element={<LoginPanel />} />
            <Route path='/register' element={<RegisterPanel />} />
          </Routes>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

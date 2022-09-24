import { ThemeProvider } from 'styled-components';
import LoginPanel from '../components/LoginPanel/LoginPanel';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPanel from '../components/RegisterPanel/RegisterPanel';
import { AuthProvider } from '../contexts/AuthContext';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/update-profile'
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path='/login' element={<LoginPanel />} />
              <Route path='/register' element={<RegisterPanel />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

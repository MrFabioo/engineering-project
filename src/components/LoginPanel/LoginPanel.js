import React, { useState, useRef } from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './LoginPanel.styles';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPanel() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to login');
    }

    setLoading(false);
  }

  return (
    <>
      <Wrapper>
        <Title>Login</Title>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <InputContainer>
            {/* OPCION WITCH TYPE='EMAIL' */}
            {/* <input
            type='email'
            required
            value={validEmail}
            className={validEmail ? 'active' : ''}
            onChange={(e) => {
              setValidEmail(e.target.value);
            }}
          /> */}
            {/* OCPION WITCH TYPE='TEXT' */}
            <input type='text' ref={emailRef} required />
            <label htmlFor='email'>Email</label>
            <div className='bar'></div>
          </InputContainer>
          <InputContainer>
            <input type='password' ref={passwordRef} required />
            <label htmlFor='password'>Password</label>
            <div className='bar'></div>
          </InputContainer>
          <Button disabled={loading} type='submit'>
            ok
          </Button>
          <Links>
            <p>
              <Link to='/forgot-password'>Forgot your password?</Link>
            </p>
            <p>
              Need account? <Link to='/register'>Register</Link>
            </p>
          </Links>
        </form>
      </Wrapper>
    </>
  );
}

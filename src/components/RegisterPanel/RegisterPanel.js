import React, { useState, useRef } from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './RegisterPanel.styles';
import Alert from '../Alerts/Alert';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPanel() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/login');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <>
      {error && <Alert error={error} />}
      <Wrapper>
        <Title>Register</Title>
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
          <InputContainer>
            <input type='password' ref={passwordConfirmRef} required />
            <label htmlFor='password'>Repeat Password</label>
            <div className='bar'></div>
          </InputContainer>
          <Button disabled={loading}>next</Button>
          <Links>
            <p>
              Have account? <Link to='/login'>Login</Link>
            </p>
          </Links>
        </form>
      </Wrapper>
    </>
  );
}

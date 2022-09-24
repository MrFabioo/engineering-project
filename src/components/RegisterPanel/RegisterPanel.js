import React, { useRef, useState } from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './RegisterPanel.styles';
import { useAuth } from '../../contexts/AuthContext';

export default function RegisterPanel() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <Wrapper>
        <Title>Register</Title>
        {currentUser && currentUser.email}
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
          <InputContainer>
            <input type='password' ref={passwordConfirmRef} required />
            <label htmlFor='password'>Repeat Password</label>
            <div className='bar'></div>
          </InputContainer>
          <Button disabled={loading}>next</Button>
          <Links>
            <p>
              Have account? <a href='#'>Login</a>
            </p>
          </Links>
        </form>
      </Wrapper>
    </>
  );
}

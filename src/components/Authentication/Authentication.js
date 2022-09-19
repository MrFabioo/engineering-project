import React, { useState, useRef } from 'react';
import { Container, Card } from './Authentication.styles';
import { useAuth } from '../../contexts/AuthContext';

export default function Authentication() {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <Container className={isActive ? 'active' : ''}>
      <Card className='card'></Card>
      {/* LOGIN PANEL */}
      <Card className='card'>
        <h1 className='title'>Login</h1>
        <form>
          <div className='input-container'>
            <input type='email' required='required' />
            <label htmlFor='email'>Email</label>
            <div className='bar'></div>
          </div>
          <div className='input-container'>
            <input type='current-password' required='required' />
            <label htmlFor='password'>Password</label>
            <div className='bar'></div>
          </div>
          <div className='button-container'>
            <button>
              <span>Go</span>
            </button>
          </div>
          <div className='footer'>
            <a href='#'>Forgot your password?</a>
          </div>
        </form>
      </Card>
      {/* REGISTER PANEL */}
      <Card className='card alt'>
        <div
          className={isActive ? 'toggle' : 'toggle active'}
          onClick={() => setIsActive(true)}
        ></div>
        <h1 className='title'>
          Register
          <div className='close' onClick={() => setIsActive(false)}></div>
        </h1>
        {currentUser && currentUser.email}
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input type='email' ref={emailRef} required='required' />
            <label htmlFor='email'>Emial</label>
            <div className='bar'></div>
          </div>
          <div className='input-container'>
            <input type='password' ref={passwordRef} required='required' />
            <label htmlFor='label'>Password</label>
            <div className='bar'></div>
          </div>
          <div className='input-container'>
            <input
              type='password'
              ref={passwordConfirmRef}
              required='required'
            />
            <label htmlFor='label'>Repeat Password</label>
            <div className='bar'></div>
          </div>
          <div className='button-container'>
            <button disabled={loading}>
              <span>Next</span>
            </button>
            <div className='error-container'>
              <span>{error && `${error}!`}</span>
            </div>
          </div>
        </form>
      </Card>
    </Container>
  );
}

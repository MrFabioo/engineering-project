import React, { useState, useRef } from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './ForgotPassword.styles';
import Alert from '../Alerts/Alert';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your emial for further instruction');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <>
      {error && <Alert error={error} />}
      <Wrapper>
        <Title>Password Reset</Title>
        {message && <p>{message}</p>}
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
          <Button disabled={loading} type='submit'>
            Reset
          </Button>
          <Links>
            <p>
              <Link to='/login'>Login</Link>
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

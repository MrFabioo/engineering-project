import React, { useState, useRef } from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './UpdateProfile.styles';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });

    try {
      setError('');
      setLoading(true);
      // await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <>
      <Wrapper>
        <Title>Update Profile</Title>
        {error && <p>{error}</p>}
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
            <input
              type='text'
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
            <label htmlFor='email'>Email</label>
            <div className='bar'></div>
          </InputContainer>
          <InputContainer>
            <input type='password' ref={passwordRef} />
            <label htmlFor='password'>Password</label>
            <div className='bar'></div>
          </InputContainer>
          <InputContainer>
            <input type='password' ref={passwordConfirmRef} />
            <label htmlFor='password'>Password Confirmation</label>
            <div className='bar'></div>
          </InputContainer>
          <Button disabled={loading} type='submit'>
            Update
          </Button>
          <Links>
            <p>
              <Link to='/'>Cancel</Link>
            </p>
          </Links>
        </form>
      </Wrapper>
    </>
  );
}

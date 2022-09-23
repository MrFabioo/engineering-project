import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './LoginPanel.styles';

export default function LoginPanel() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');

  return (
    <>
      <Wrapper>
        <Title>Login</Title>
        <form>
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
            <input type='text' required />
            <label htmlFor='email'>Email</label>
            <div className='bar'></div>
          </InputContainer>
          <InputContainer>
            <input type='password' required />
            <label htmlFor='password'>Password</label>
            <div className='bar'></div>
          </InputContainer>
          <Button>ok</Button>
          <Links>
            <p>
              <a href='#'>Forgot your password?</a>
            </p>
            <p>
              Need account? <a href='#'>Register</a>
            </p>
          </Links>
        </form>
      </Wrapper>
    </>
  );
}

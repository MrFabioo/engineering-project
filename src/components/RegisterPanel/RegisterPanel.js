// import React, { useState } from 'react'; // OPCION WITCH TYPE='EMAIL'
import React from 'react';
import {
  Wrapper,
  Title,
  InputContainer,
  Button,
  Links,
} from './RegisterPanel.styles';

export default function RegisterPanel() {
  // OPCION WITCH TYPE='EMAIL'
  // const [validEmail, setValidEmail] = useState('');

  return (
    <>
      <Wrapper>
        <Title>Register</Title>
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
          <InputContainer>
            <input type='password' required />
            <label htmlFor='password'>Repeat Password</label>
            <div className='bar'></div>
          </InputContainer>
          <Button>next</Button>
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

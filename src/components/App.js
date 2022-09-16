import React, { useState } from 'react';
import { Container, Card } from './App.styles';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container className={isActive ? 'active' : ''}>
      <Card className='card'></Card>
      <Card className='card'>
        <h1 className='title'>Login</h1>
        <form>
          <div className='input-container'>
            <input type='#{type}' id='#{label}' required='required' />
            <label htmlFor='#{label}'>Username</label>
            <div className='bar'></div>
          </div>
          <div className='input-container'>
            <input type='#{type}' id='#{label}' required='required' />
            <label htmlFor='#{label}'>Password</label>
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
      <Card className='card alt'>
        <div
          className={isActive ? 'toggle' : 'toggle active'}
          onClick={() => setIsActive(true)}
        ></div>
        <h1 className='title'>
          Register
          <div className='close' onClick={() => setIsActive(false)}></div>
        </h1>
        <form>
          <div className='input-container'>
            <input type='text' id='label' required='required' />
            <label htmlFor='label'>Username</label>
            <div className='bar'></div>
          </div>
          <div className='input-container'>
            <input type='password' id='label' required='required' />
            <label htmlFor='label'>Password</label>
            <div className='bar'></div>
          </div>
          <div className='input-container'>
            <input type='password' id='label' required='required' />
            <label htmlFor='label'>Repeat Password</label>
            <div className='bar'></div>
          </div>
          <div className='button-container'>
            <button>
              <span>Next</span>
            </button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default App;

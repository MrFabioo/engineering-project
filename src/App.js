import React from 'react';
import { AppStyles, Panel, Wrapper, CircleBtn } from './App.styles';

const App = () => {
  return (
    <AppStyles>
      <Panel>
        <CircleBtn>+</CircleBtn>
        <Wrapper>
          <h3>LOGIN</h3>
          <input type='text' placeholder='Username' autoFocus></input>
          <input type='password' placeholder='Password'></input>
          <button>GO</button>
          <a href='.'>Forgot your password?</a>
        </Wrapper>
      </Panel>
    </AppStyles>
  );
};

export default App;

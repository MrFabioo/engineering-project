import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <div className='loginPanel'>
        <h3>LOGIN</h3>
        <input type='text' placeholder='Username' autoFocus></input>
        <input type='password' placeholder='Password'></input>
        <button>GO</button>
        <a href='.'>Forgot your password?</a>
      </div>
    </div>
  );
};

export default App;

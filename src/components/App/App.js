import React, { Component } from 'react';
import './App.sass';

import CloginForm from '../LoginForm/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CloginForm />
      </div>
    );
  }
}

export default App;

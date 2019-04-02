import React, { Component } from 'react';
import './App.sass';

import CloginForm from '../LoginForm/LoginForm';
import CMain from '../Main/Main';

import { connect } from 'react-redux';

class App extends Component {
  switcher = () => {
    switch ( this.props.curScreen ) {
      case 'login' : 
        return <CloginForm />
      case 'main' :
        return <CMain />
      default :
        return <CloginForm />
     } 
  }
  render() {    
    return (
      <div className="App">
        { this.switcher () }
      </div>
    );
  }
}

let mapState = state => {
  return {
      curScreen : state.curScreen
  }
}

export default connect(mapState)(App)

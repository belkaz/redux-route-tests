import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import './LoginForm.sass';
import ALogin from '../../redux/act';

class CLoginForm extends Component {    
    tryLogin = () => {    
        this.props.Qlogin();   
    }
    render() {
        return (
            <div className = 'LoginForm'>
            <Form>
                <Form.Group>
                    <Form.Label
                        className = 'FormLab'>
                        Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        className = 'FormInput'/>                   
                </Form.Group>
                <Form.Group>
                    <Form.Label
                        className = 'FormLab'
                        >Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        className = 'FormInput'/>
                </Form.Group>  
                <Button   
                    variant = 'primary'               
                    className = 'FormBut'
                    onClick = { this.tryLogin } >
                    Submit
                </Button>  
           </Form>                    
            </div>
        )
    }
}

let mapState = state => {
    return {
        curScreen : state.curScreen
    }
}
let mapAction = (dispatch) => {
    return {
        Qlogin : ex => dispatch( ALogin() )
    }
}

export default connect (mapState, mapAction) (CLoginForm)
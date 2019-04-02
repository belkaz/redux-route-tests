import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import './LoginForm.sass';

class CLoginForm extends Component {
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
                    variant="primary" 
                    type="submit"
                    className = 'FormBut'>
                    Submit
                </Button>
            </Form>
            </div>
        )
    }
}

export default CLoginForm
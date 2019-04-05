import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import './UserInfo.sass';

class CUserInfo extends Component {
    
    render() {
        return (
            <div 
                className = 'UserInfo'                
                >
                <Form
                    className = 'UIForm'>
                    <Form.Control 
                        type = 'text'
                        placeholder = 'FIO'
                        className = 'UISearch UISearchFIO'></Form.Control> 
                    <Form.Control 
                        type = 'number'
                        placeholder = 'CODE0'
                        className = 'UISearch UISearchCode0'></Form.Control>
                    <Form.Control 
                        type = 'number'
                        placeholder = 'CODE1'
                        className = 'UISearch UISearchCode1'></Form.Control>                    
                </Form>
                <Button 
                        variant = 'primary'
                        type = 'submit'                        
                        className = 'UISearchBut'
                        onClick = { ()=>alert('asdsadasdasd')}>
                        Find
                </Button>
            </div>
        )
    }
}

export default CUserInfo;
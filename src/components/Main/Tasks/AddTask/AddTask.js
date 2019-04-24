import React , { Component } from 'react';

import './AddTask.sass';
import { Dropdown, Button } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';

import CAddTaskClose from './AddTaskClose/AddTaskClose';
import CAddTaskTemp from './AddTaskTemp/AddTaskTemp';
import CAddTaskTransfer from './AddTaskTransfer/AddTaskTransfer';

class CAddTask extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            ddText : '......'            
        }
    }
    TypeSelector = ( i ) => {
        switch ( i ) {
            case 0 : {                
                this.setState({ ddText : 'Transfer'});                
                break;
            }                
            case 1 : {                
                this.setState({ ddText : 'Close'});
                break;
            }
            case 2 : {
                this.setState({ ddText : 'Add rights'});
                break;
            }       
            default : {
                
            }        
        } 
    }
    Switcher = () => {
        let x = <CAddTaskTransfer />
        switch ( this.state.ddText ) {
            case 'Transfer' : {
                x = <CAddTaskTransfer />;
                break;
            }
            case 'Close' : {
                x = <CAddTaskClose />;
                break;
            }
            case 'Add rights' : {
                x = <CAddTaskTemp />;
                break;
            }
            default : {
                x = <CAddTaskTransfer />
            }
        }
        return x;
    }
    render() {
        return (
            <div >
               <div 
                className = 'AddTask'
                style = { {'display' : this.props.visible} }>                        
                    <Dropdown 
                        className = 'AddTaskSelector'>
                    <Dropdown.Toggle 
                        variant="success" 
                        id="dropdown-basic">
                        Select type of task
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item 
                            href="#/action-1"
                            onClick = { ()=> { this.TypeSelector( 2 ) }}>Add rights</Dropdown.Item>
                        <Dropdown.Item 
                            href="#/action-2"
                            onClick = { ()=> { this.TypeSelector( 0 ) }}>Transfer</Dropdown.Item>
                        <Dropdown.Item 
                            href="#/action-3"
                            onClick = { ()=> { this.TypeSelector( 1 ) }}>Close user</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <InputGroup size="sm" className="mb-3 ATText">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">FIO</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup 
                        size="sm" className="mb-3 ATCode">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">CODE</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            aria-label="Small" 
                            aria-describedby="inputGroup-sizing-sm" 
                            type = 'number'/>
                    </InputGroup>
                    <Button
                        variant = 'primary'
                        className = 'ATBut'>
                        Search
                    </Button>
                    { this.Switcher() }
                </div>
            </div>
        )
    }
} 

export default CAddTask
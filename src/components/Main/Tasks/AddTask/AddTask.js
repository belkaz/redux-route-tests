import React , { Component } from 'react';

import './AddTask.sass';
import { Dropdown } from 'react-bootstrap';

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
                        Dropdown Button
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
                    { this.Switcher() }
                </div>
            </div>
        )
    }
} 

export default CAddTask
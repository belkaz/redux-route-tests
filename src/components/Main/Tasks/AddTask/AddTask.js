import React , { Component } from 'react';

import './AddTask.sass';

import CAddTaskClose from './AddTaskClose/AddTaskClose';

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
                this.setState({ ddText : 'Temp add rights'});
                break;
            }               
        } 
    }
   
    render() {
        return (
            <div >
               <div className = 'AddTask'>                
                    <CAddTaskClose />
                </div>
            </div>
        )
    }
} 

export default CAddTask
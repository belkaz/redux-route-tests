import React, { Component } from 'react';

import './Tasks.sass';
import { Button } from 'react-bootstrap';

import CUnclosedTasks from './UnclosedTasks/UnclosedTasks';
import CAddTasks from './AddTask/AddTask';

import { connect } from 'react-redux';
import ASwitchTask from '../../../redux/actions/switchTaskVisible';

class CTasks extends Component {    
    constructor ( props ) {
        super ( props );
        this.state = {
            addTaskVisible : 'none',
            addTaskBarText : 'Add New Task'
        }
    }
    genTasks = () => {        
        let mm = [];
        
        this.props.tasks.forEach ( (el) => {  
            if ( el.TASK_CLOSE === "-" ) {
                switch ( el.TYPE ) {
                    case 'TRANSFER' : 
                    {
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }                            
                            taskType = 'ВРЕМЕННЫЙ ПЕРЕВОД'
                            taskStart = { el.START }
                            taskInfo = { el.WHO + ' ' +el.FROM +'->' + el.TO }
                            taskRes = { el.REASON}
                            >
                        </CUnclosedTasks>)
                    };
                    break;
                    case 'TEMP ADD RIGHTS':
                    {
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }                            
                            taskType = "ВРЕМЕННЫЕ ПРАВА"
                            taskStart = { el.END }
                            taskInfo = { el.WHO + ' ' +el.UNIT }
                            taskRes = { el.REASON}>
                        </CUnclosedTasks>)
                    };
                    break;
                    case 'CLOSE' : 
                    {
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }                           
                            taskType = "ЗАКРЫТЬ ПРАВА"
                            taskStart = { el.CLOSE_DATE }
                            taskInfo = { el.WHO }
                            taskRes = { el.REASON}>
                        </CUnclosedTasks>)
                    };
                    break;
                }        
            }                
        })
        
        return mm;       
    }
    switchAddTaskBar = () => {        
        let y = this.state.addTaskBarText === 'Add New Task' ? 'Close bar' : 'Add New Task';
        this.setState({ 
            
            addTaskBarText : y
        })
    }
    render () {
        return (
            <div className = 'Tasks'>
                <Button
                    variant = 'danger'
                    className = 'AddTaskBut'
                    onClick = { () => {this.props.tryToShowAddTask()} }>
                        { this.state.addTaskBarText }
                    </Button>       
                { this.genTasks() }  
                <CAddTasks visible = { this.props.showAddTasks }/>           
            </div>
        )
    }
}

let mapState = state => {
    return {
        tasks : state.tasks,
        showAddTasks : state.showAddTask
    }
}
let mapDispatch = dispatch => {
    return {
        tryToShowAddTask : () => { dispatch (ASwitchTask ())}
    }
}

export default connect (mapState, mapDispatch) (CTasks)
import React, { Component } from 'react';

import './Tasks.sass';
import { Button } from 'react-bootstrap';

import CUnclosedTasks from './UnclosedTasks/UnclosedTasks';
import CAddTasks from './AddTask/AddTask';

import { connect } from 'react-redux';
import ASwitchTask from '../../../redux/actions/switchTaskVisible';

class CTasks extends Component {  
    genTasks = () => {        
        let mm = [];        
        this.props.tasks.forEach ( (el) => {  
            if ( el.TASK_CLOSE === "-" ) {
                switch ( el.TYPE ) {
                    case 'TRANSFER' :                  
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }                            
                            taskType = 'ВРЕМЕННЫЙ ПЕРЕВОД'
                            taskStart = { el.START }
                            taskInfo = { el.WHO + ' ' +el.FROM +'->' + el.TO }
                            taskRes = { el.REASON}
                            />
                        );
                    break;
                    case 'TEMP ADD RIGHTS':                    
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }                            
                            taskType = "ВРЕМЕННЫЕ ПРАВА"
                            taskStart = { el.END }
                            taskInfo = { el.WHO + ' ' +el.UNIT }
                            taskRes = { el.REASON} />
                        );
                    break;
                    case 'CLOSE' :                     
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }                           
                            taskType = "ЗАКРЫТЬ ПРАВА"
                            taskStart = { el.CLOSE_DATE }
                            taskInfo = { el.WHO }
                            taskRes = { el.REASON}>
                        /></CUnclosedTasks>);
                    break;
                    default : {}
                }        
            }                
        })        
        return mm;       
    }    
    render () {
        return (
            <div className = 'Tasks'>
                <Button
                    variant = 'danger'
                    className = 'AddTaskBut'
                    onClick = { () => {this.props.tryToShowAddTask()} }>
                        { this.props.butText }
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
        showAddTasks : state.showAddTask,
        butText : state.addTaskButText 
    }
}
let mapDispatch = dispatch => {
    return {
        tryToShowAddTask : () => { dispatch (ASwitchTask ())}
    }
}

export default connect (mapState, mapDispatch) (CTasks)
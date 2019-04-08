import React, { Component } from 'react';

import './Tasks.sass';
import { Button } from 'react-bootstrap';

import CUnclosedTasks from './UnclosedTasks/UnclosedTasks';
import CAddTasks from './AddTask/AddTask';

import { connect } from 'react-redux';

class CTasks extends Component {
    innerClickHandler = (i) => {
        alert (i)
    }
    genTasks = () => {
        let lefts = [40, 350, 660];
        let tops = [10, 270, 530];
        let mm = [];
        let i = 0;
        let y = 0;
        this.props.tasks.forEach ( (el) => {  
            if ( el.TASK_CLOSE === "-" ) {
                switch ( el.TYPE ) {
                    case 'TRANSFER' : 
                    {
                        mm.push(<CUnclosedTasks 
                            key = { el.IND }
                            id = { el.IND }
                            lef  = { lefts[i] + 'px'}
                            to   = { tops[y] + 'px'}
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
                            lef  = { lefts[i] + 'px'}
                            to   = { tops[y] + 'px'}
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
                            lef  = { lefts[i] + 'px'}
                            to   = { tops[y] + 'px'}
                            taskType = "ЗАКРЫТЬ ПРАВА"
                            taskStart = { el.CLOSE_DATE }
                            taskInfo = { el.WHO }
                            taskRes = { el.REASON}>
                        </CUnclosedTasks>)
                    };
                    break;
                }              
                i += 1;
                if ( i === 3) {
                    i =0;
                    y += 1;
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
                    className = 'AddTaskBut'>
                        AddNew Task
                    </Button>       
                { this.genTasks() }             
            </div>
        )
    }
}

let mapState = state => {
    return {
        tasks : state.tasks
    }
}

export default connect (mapState) (CTasks)
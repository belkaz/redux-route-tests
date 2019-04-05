import React, { Component } from 'react';

import './Tasks.sass';
import { Button } from 'react-bootstrap';

import CUnclosedTasks from './UnclosedTasks/UnclosedTasks';
import CAddTasks from './AddTask/AddTask';

class CTasks extends Component {
    render () {
        return (
            <div className = 'Tasks'>
                <Button
                    variant = 'danger'
                    className = 'AddTaskBut'>
                        AddNew Task
                    </Button>       
                    <CUnclosedTasks 
                    lef  = '40px'
                    to = '10px'
                    taskType = 'Close user'
                    taskStart = '2019-04-03_20'
                    taskInfo = 'Ivanov VV close'
                    taskEnd = 'DZ 1512 by 2019-03-03'></CUnclosedTasks>
                 <CUnclosedTasks 
                    lef  = '350px'
                    to = '10px'
                    taskType = 'Close user'
                    taskStart = '2019-04-03_20'
                    taskInfo = 'Ivanov VV close'
                    taskEnd = 'DZ 1512 by 2019-03-03'></CUnclosedTasks>                
            </div>
        )
    }
}

export default CTasks
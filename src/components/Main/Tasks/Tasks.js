import React, { Component } from 'react';

import './Tasks.sass';
import { Button } from 'react-bootstrap';

import CUnclosedTasks from './UnclosedTasks/UnclosedTasks';
import CAddTasks from './AddTask/AddTask';

class CTasks extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            tasks : [
                {
                    "WHO" : "IvanovVV",
                    "REASON" : "2019-04-05_123123",
                    "TYPE" : "TRANSFER",
                    "FROM" : "1",
                    "TO" : "2",
                    "START" : "2019-04-05_10",
                    "END" : "2019-04-05_22",
                    "TASK_CLOSE" : "-",
                    "IND" : 0       
                },
                {
                    "WHO" : "IvanovVV",
                    "REASON" : "2019-04-05_3213123",
                    "TYPE" : "TRANSFER",
                    "FROM" : "2",
                    "TO" : "1",
                    "START" : "2019-04-12_10",
                    "END" : "2019-04-12_22" ,
                    "TASK_CLOSE" : "-"  ,
                    "IND" : 1          
                },
                {
                    "WHO" : "IvanovVV",
                    "REASON" : "2019-04-05_3213123",
                    "TYPE" : "TEMP ADD RIGHTS",
                    "UNIT" : "2",           
                    "END" : "2019-04-12_22", 
                    "TASK_CLOSE" : "-"  ,  
                    "IND" : 2        
                },
                {
                    "WHO" : "IvanovVV",
                    "REASON" : "2019-04-05_3213123",
                    "TYPE" : "CLOSE",                      
                    "CLOSE_DATE" : "2019-04-12_22",
                    "TASK_CLOSE" : "-" ,
                    "IND" : 3           
                }        
            ]
        }
    }
    innerClickHandler = (i) => {
        alert (i)
    }
    genTasks = () => {
        let lefts = [40, 350, 660];
        let tops = [10, 270, 530];
        let mm = [];
        let i = 0;
        let y = 0;
        this.state.tasks.forEach ( (el) => {  
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
                {/* <CUnclosedTasks 
                    lef  = '660px'
                    to = '10px'
                    taskType = 'Close user'
                    taskStart = '2019-04-03_20'
                    taskInfo = 'Ivanov VV close'
                    taskEnd = 'DZ 1512 by 2019-03-03'></CUnclosedTasks>                */}
            </div>
        )
    }
}

export default CTasks
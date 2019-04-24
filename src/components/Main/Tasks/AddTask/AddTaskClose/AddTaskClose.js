import  React, { Component } from 'react';

import './AddTaskClose.sass';
import { InputGroup, Button, FormControl} from 'react-bootstrap';

import { connect } from 'react-redux';
import AAddCloseTask from '../../../../../redux/actions/addCloseTask'
import CTasks from '../../Tasks';
import ASwitchTask from '../../../../../redux/actions/switchTaskVisible';
let dat = {
    reason : 'GASD',
    who: 'Ivasasdasd',
    when : '2019-04-04'
}

class CAddTaskClose extends Component {
    render() {
        return (
            <div
                className = 'AddTaskClose'>
                  <InputGroup 
                        size="sm" className="mb-3 ATCReason">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">REASON</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            aria-label="Small" 
                            aria-describedby="inputGroup-sizing-sm" 
                            />
                    </InputGroup>
                    <InputGroup 
                        size="sm" className="mb-3 ATCReason">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">WHEN</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            type = 'date'
                            aria-label="Small" 
                            aria-describedby="inputGroup-sizing-sm" 
                            />
                    </InputGroup>                    
                    <Button
                        variant = 'primary'
                        className = 'ATCBut'
                        onClick = { () => { 
                            this.props.tryAddCloseTask ( dat );    
                            this.props.tryToShowAddTask ()                        
                        }}>
                        Close user
                    </Button>
            </div>          
        )
    }
}

let mapState = state => {
    return {}
}

let masDispatch = dispatch => {
    return {
        tryAddCloseTask: dat => dispatch ( AAddCloseTask (dat) ),
        tryToShowAddTask : () => { dispatch (ASwitchTask ())}
    }
}

export default connect(mapState, masDispatch) (CAddTaskClose)
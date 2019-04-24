import  React, { Component } from 'react';

import './AddTaskClose.sass';
import { InputGroup, Button, FormControl} from 'react-bootstrap';

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
                        className = 'ATCBut'>
                        Close user
                    </Button>
            </div>          
        )
    }
}

export default CAddTaskClose
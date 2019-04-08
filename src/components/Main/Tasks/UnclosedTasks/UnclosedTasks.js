import React, { Component } from 'react';

import './UnclosedTasks.sass';

import { Card , Button } from 'react-bootstrap';

import ACloseTask from '../../../../redux/actions/closeTask';
import { connect } from 'react-redux';

class CUnclosedTasks extends Component {       
    render() {
        return (
            <div 
                className = 'UnclosedTasks'
                >
                <Card 
                    className="text-center UTCard"                    
                    >
                <Card.Header>{ this.props.taskType }</Card.Header>
                <Card.Body>
                    <Card.Title>{ this.props.taskStart}</Card.Title>
                    <Card.Text>
                        { this.props.taskInfo}
                    </Card.Text>
                    <Button 
                        variant="primary"
                        onClick = { () => { 
                            this.props.tryCloseTask ( this.props.id )
                        }}>Close task</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{ this.props.taskRes }</Card.Footer>
                </Card>
            </div>
        )
    }
}

let mapState = state => {
    return {}
}

let masDispatch = dispatch => {
    return {
        tryCloseTask: id => dispatch ( ACloseTask (id) )
    }
}
export default connect(mapState, masDispatch) (CUnclosedTasks)
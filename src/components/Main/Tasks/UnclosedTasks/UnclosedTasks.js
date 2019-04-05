import React, { Component } from 'react';

import './UnclosedTasks.sass';

import { Card , Button } from 'react-bootstrap';

class CUnclosedTasks extends Component {
    st = {
        'left' : this.props.lef,
        'top' : this.props.to
    }
    render() {
        return (
            <div 
                className = 'UnclosedTasks'
                >
                <Card 
                    className="text-center UTCard"
                    style = { this.st }>
                <Card.Header>{ this.props.taskType }</Card.Header>
                <Card.Body>
                    <Card.Title>{ this.props.taskStart}</Card.Title>
                    <Card.Text>
                        { this.props.taskInfo}
                    </Card.Text>
                    <Button variant="primary">Close task</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{ this.props.taskEnd }</Card.Footer>
                </Card>
            </div>
        )
    }
}

export default CUnclosedTasks
import  React, { Component } from 'react';

import './AddTaskClose.sass';

class CAddTaskClose extends Component {
    switcher = () => {
        let x = ''
        if ( this.props.visible ) {
            x = (
                <div className = "ATClose">

                </div>
            )
        }
        else {
            x = (
                <div ></div>
            )
        }
        return x
    }
    render() {
        return (
            <div>
                  { this.switcher}
            </div>          
        )
    }
}

export default CAddTaskClose
import React, { Component } from 'react';

import './PO1Unit.css';

class PO1Unit extends Component {
    st = {
        left : this.props.lef  + 'px'
    }
    render() {
        return (
            <div 
                style = { this.st }
                className = 'PO1Unit'>
                <input 
                    type = 'text'
                    id = 'PO1UnitCh'
                    value = { this.props.val }
                    className = 'PO1UnitCh'/> 
                <label 
                    className = 'PO1UnitLab'
                    htmlFor = 'PO1UnitCh'> 
                    { this.props.unit}
                </label>                
            </div>
        )
    }
}

export default PO1Unit
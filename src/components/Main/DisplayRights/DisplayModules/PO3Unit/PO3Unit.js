import React, { Component } from 'react';

import './PO3Unit.css';

class PO3Unit extends Component {
    st = {
        left : this.props.lef  + 'px'
    }
    render() {
        return (
            <div 
                style = { this.st }
                className = 'PO3Unit'>
                <input 
                    type = 'text'
                    id = 'PO3UnitCh'
                    value = { this.props.val }
                    className = 'PO3UnitCh'/> 
                <label 
                    className = 'PO3UnitLab'
                    htmlFor = 'PO3UnitCh'> 
                    { this.props.unit}
                </label>                
            </div>
        )
    }
}

export default PO3Unit
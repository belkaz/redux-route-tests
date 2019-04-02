import React, { Component } from 'react';

import './PO2Unit.css';

class PO2Unit extends Component {
    st = {
        left : this.props.lef  + 'px'
    }
    render() {
        return (
            <div 
                style = { this.st }
                className = 'PO2Unit'>
                <input 
                    type = 'text'
                    id = 'PO2UnitCh'
                    value = { this.props.val }
                    className = 'PO2UnitCh'/> 
                <label 
                    className = 'PO2UnitLab'
                    htmlFor = 'PO2UnitCh'> 
                    { this.props.unit}
                </label>                
            </div>
        )
    }
}

export default PO2Unit
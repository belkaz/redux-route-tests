import React, { Component } from 'react';

import './PO0Unit.css';

class PO0Unit extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            che : this.props.ch
        } 
    }

    clickHandler = () => {
        this.setState ({ che : this.state.che === '0'?'1':'0' })
    }

    st = {
        left : this.props.lef  + 'px'
    }
    render() {   
        return (
            <div 
                style = { this.st }
                className = 'PO0Unit'>
                <input 
                    type = 'checkbox'
                    id = 'PO0UnitCh'
                    checked = { this.state.che === '1'?true:false}
                    onChange = { this.clickHandler }
                    className = 'PO0UnitCh'/> 
                <label 
                    className = 'PO0UnitLab'
                    htmlFor = 'PO0UnitCh'> 
                    { this.props.unit}
                </label>
            </div>
        )
    }
}

export default PO0Unit
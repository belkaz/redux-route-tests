import React, { Component } from 'react';

import './PO2Panel.css' ;

import PO2Unit from '../PO2Unit/PO2Unit.js';

class PO2Panel extends Component {
    units = ['1', '2', '3', '4', '5'];
    lefs = [10, 185, 360, 535, 710];
    cc = [0,1,2,3,4].map ((el) => {
            return <PO2Unit
                        unit = {this.units[el]}
                        lef = {this.lefs[el]}
                        val = { this.props.rr[el]}/>
            })
    
    render() {
        return (
            <div className = 'PO2Panel'>
               { this.cc }
            </div>
        )
    }
}

export default PO2Panel;
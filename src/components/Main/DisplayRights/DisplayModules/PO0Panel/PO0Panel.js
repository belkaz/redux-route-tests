import React, { Component } from 'react';

import './PO0Panel.css';

import PO0Unit from '../PO0Unit/PO0Unit';

class PO0Panel extends Component {
    units = ['1', '2', '3', '4', '5'];
    lefs = [10, 60, 110, 160, 210];
    cc = [0,1,2,3,4].map ((el) => {
            return <PO0Unit
                        unit = {this.units[el]}
                        lef = {this.lefs[el]}
                        ch = { this.props.rr[el]}/>
            })
        
    render() {        
        return (
            <div className = 'PO0Panel'>             
                { this.cc }      
            </div>
        )
    }
}

export default PO0Panel
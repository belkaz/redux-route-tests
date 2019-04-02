import React, { Component } from 'react';

import './PO3Panel.css' ;

import PO3Unit from '../PO3Unit/PO3Unit.js';

class PO3Panel extends Component {
    render() {
        return (
            <div className = 'PO3Panel'>
                <PO3Unit 
                    val = {this.props.rr[0]} 
                    unit = '1' 
                    lef = '10'/>
                <PO3Unit 
                    val = {this.props.rr[1]} 
                    unit = '2' 
                    lef = '70'/>
                <PO3Unit 
                    val = {this.props.rr[2]} 
                    unit = '3' 
                    lef = '130'/>
                <PO3Unit 
                    val = {this.props.rr[3]} 
                    unit = '4' 
                    lef = '190'/>
                <PO3Unit 
                    val = {this.props.rr[4]} 
                    unit = '5' 
                    lef = '250'/>
            </div>
        )
    }
}

export default PO3Panel;
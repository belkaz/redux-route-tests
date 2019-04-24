import React, { Component } from 'react';

import './PO1Panel.css' ;

import PO1Unit from '../PO1Unit/PO1Unit.js';

class PO1Panel extends Component {
    render() {
        return (
            <div className = 'PO1Panel'>
                <PO1Unit 
                    val = {this.props.rr[0]}                     
                    unit = '1' 
                    lef = '10'/>
                <PO1Unit 
                    val = {this.props.rr[1]} 
                    unit = '2' 
                    lef = '110'/>
                <PO1Unit 
                    val = {this.props.rr[2]}
                    unit = '3' 
                    lef = '210'/>
                <PO1Unit 
                    val = {this.props.rr[3]}
                    unit = '4' 
                    lef = '310'/>
                <PO1Unit 
                    val = {this.props.rr[4]} 
                    unit = '5' 
                    lef = '410'/>
            </div>
        )
    }
}

export default PO1Panel;
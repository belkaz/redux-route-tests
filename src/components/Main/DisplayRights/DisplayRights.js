import React, { Component } from 'react';

import { connect } from 'react-redux';

import './DisplayRights.sass';

import PO0Panel from './DisplayModules/PO0Panel/PO0Panel';
import PO1Panel from './DisplayModules/PO1Panel/PO1Panel';
import PO2Panel from './DisplayModules/PO2Panel/PO2Panel';
import PO3Panel from './DisplayModules/PO3Panel/PO3Panel';
import SinglePO from './DisplayModules/SinglePO/SinglePO';

class DisplayRights extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
          po0 : ['0','0','1','0','0'],
          po1 : ['-', '-', '-', '-', '-'],
          po2 : ['-', '-', '-', '-', '-'],
          po3 : ['-', '-', '-', '-', '-'],
          po4 : '0',
          po5 : '1',
          po6 : '0',
          po7 : '1'
        }
      }
      
    render() {
        return (
            <div className = 'DisplayRights'>
                { this.props.FIO } 
                <PO0Panel rr = { this.state.po0 }/>
                <PO1Panel rr = { this.state.po1 }/>
                <PO2Panel rr = { this.state.po2 }/>
                <PO3Panel rr = { this.state.po3 }/>
                <SinglePO po = 'PO4' ch = { this.state.po4 } tt = '320'/>
                <SinglePO po = 'PO5' ch = { this.state.po5 } tt = '370'/>
                <SinglePO po = 'PO6' ch = { this.state.po6 } tt = '420'/>
                <SinglePO po = 'PO7' ch = { this.state.po7 } tt = '470'/>
            </div>
        )
    }
}

let mapToState = state => {
    return {
        user : state.user
    }
}

export default connect(mapToState)(DisplayRights)
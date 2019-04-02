import React, { Component } from 'react';

import './SinglePO.css';

class SinglePO extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            che : this.props.ch
        }
    }    
    st = {
        top: this.props.tt + 'px'
    }

    clickHandler = () => {
        this.setState ({ che : this.state.che === '0'?'1':'0' })
    }

    render() {  
        return (
            <div 
            style = { this.st }
            className = 'SinglePO'>
            <input 
                type = 'checkbox'
                id = 'SinglePOCh'
                checked = { this.state.che === '1'?true:false}
                onChange = { this.clickHandler }
                className = 'SinglePOCh'/> 
            <label 
                className = 'SinglePOLab'
                htmlFor = 'SinglePOCh'> 
                { this.props.po}
            </label>
            </div>
        )
    }
}

export default SinglePO
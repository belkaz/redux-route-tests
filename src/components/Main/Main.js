import React, { Component } from 'react';

import './Main.sass';

import { Tabs, Tab, Sonnet } from 'react-bootstrap';

import DisplayRights from './DisplayRights/DisplayRights';

class CMain extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            
        }
    }
    render() {
        return (
            <div className = 'Main'>
                <p>Welcome, master</p>
                <Tabs 
                    defaultActiveKey="profile" 
                    className = 'MainTabs'>
                    <Tab 
                        eventKey="profile" 
                        title="Profile"
                        className = 'Tab'>
                        q2
                    </Tab>
                    <Tab
                        eventKey="home" 
                        title="Rights"
                        className = 'Tab'>
                        <DisplayRights />
                    </Tab>                    
                    <Tab 
                        eventKey="contact" 
                        title="Contact"
                        className = 'Tab'>
                        q3
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default CMain
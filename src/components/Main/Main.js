import React, { Component } from 'react';

import './Main.sass';

import { Tabs, Tab } from 'react-bootstrap';

import CUserInfo from './UserInfo/UserInfo';
import DisplayRights from './DisplayRights/DisplayRights';
import CTasks from './Tasks/Tasks';

class CMain extends Component {
    render() {
        return (
            <div className = 'Main'>
                <p>Welcome, master</p>
                <Tabs 
                    defaultActiveKey="watch" 
                    className = 'MainTabs'>
                    <Tab 
                        eventKey="watch" 
                        title="Tasks"
                        className = 'Tab'>
                        <CTasks />
                    </Tab>
                    <Tab 
                        eventKey="profile" 
                        title="Profile"
                        className = 'Tab'>
                        <CUserInfo />
                    </Tab>
                    <Tab
                        eventKey="home" 
                        title="Rights"
                        className = 'Tab'>
                        {/* <DisplayRights /> */}
                    </Tab>                
                </Tabs>
            </div>
        )
    }
}

export default CMain
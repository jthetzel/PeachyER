"use strict"
import React from 'react';
import {Image, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AlertView from './alertView';
import ActivityView from './activityView';
import StaffView from './staffView';
import StatsView from './statsView';
import NavBar from './../navbar';


class Dashboard extends React.Component{
render(){
    return(
        <div>
        <div className='navbar'>
            <NavBar />
        </div>
        <Well>
            <Row>
                <Col xs={12} md={8}>
                    Dashboard title
                </Col>
                <Col xs={6} md={4}>
                    Search bar
                </Col>
            </Row>
            <Row>
                <Col xs={10} md={7}>
                    <div class='contentBlock'>
                        <StatsView />
                    </div>
                </Col>
                <Col xs={8} md={5}>
                    <div class='contentBlock'>
                        <AlertView />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={10} md={7}>
                    <div class='contentBlock'>
                        <StaffView />
                    </div>
                </Col>
                <Col xs={8} md={5}>
                    <div class='contentBlock'>
                        <ActivityView />
                    </div>
                </Col>
            </Row>
        </Well>
        </div>
    )
  }
}

function mapStateToProps(state){
    return {
    }
}

export default connect(mapStateToProps)(Dashboard);

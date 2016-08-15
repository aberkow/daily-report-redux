import React, { Component } from 'react';
import { connect } from 'react-redux';

const actions = require('../js/actions');

import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class InfoDrawer extends Component{
  constructor(props){
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  closeDrawer(isOpen){
    this.props.dispatch(actions.toggleDrawer(this.props.open));
  }
  render(){
    const infoStyle = {
      marginLeft: 16,
      marginRight: 16
    }
    return(
      <div>
        <Drawer open={this.props.open}
          width={500}>
          <IconButton onClick={this.closeDrawer}>
            <NavigationClose />
          </IconButton>
          <div style={infoStyle}>
            <h1>Info</h1>
            <p>This app is intended for teachers to create daily reports for pre-K students with special needs. Teachers can select the different services students may recieve such as:</p>
            <ul>
              <li>Occupational Therapy (OT)</li>
              <li>Physical Therapy (PT)</li>
              <li>Speech Therapy (Speech)</li>
              <li>Applied Behavioral Analysis Therapy (ABA)</li>
            </ul>
            <p>In addition, teachers can report on each child's mood, class-work, and what if any reinforcers (preferred items or interests to reward and motivate students) were used throughout the day.</p>
          </div>
        </Drawer>
      </div>
    );
  };
};

var Container = connect()(InfoDrawer);
module.exports = Container;

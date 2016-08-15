import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');
//import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import InfoDrawer from './Drawer';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';

class InfoBar extends React.Component{
  constructor(props){
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer(isOpen){
    //evt.preventDefault();
    this.props.dispatch(actions.toggleDrawer(this.props.open));
  }
  render(){
    return(
      <div>
        <AppBar title='Daily Report'
          iconElementLeft={
            <IconButton onClick={this.openDrawer}>
              <InfoOutline />
            </IconButton>
          } />
        <InfoDrawer open={this.props.open} />
      </div>
    );
  };
};

var Container = connect()(InfoBar);
module.exports = Container;

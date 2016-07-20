import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';

class AppBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <AppBar title='Daily Report' 
    );
  };
};

module.exports = AppBar;

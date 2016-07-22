import React from 'react';
import Paper from 'material-ui/Paper';

import HandAndPen from 'material-ui/svg-icons/custom/hand-and-pen';

class Services extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const iconStyle = {
      height: 50,
      width: 50
    };
    const paperStyle = {
      height: 60,
      width: 60,
      textAlign: 'center',
    };
    return(
      <div>
        <h3>Today, {this.props.studentName} went to:</h3>
        <Paper style={paperStyle}
          children={<HandAndPen style={iconStyle} />} />
      </div>
    );
  };
};

Services.defaultProps = {
  servicesArray: []
}

module.exports = Services;

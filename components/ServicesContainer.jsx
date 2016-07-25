import React from 'react';
import Services from './Services';

import Paper from 'material-ui/Paper';

class ServicesContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const studentServicesStyle = {
      display: 'inline-block'
    }
    return(
      <div style={studentServicesStyle}>
        <Services studentName={this.props.studentName} />
      </div>
    );
  };
};

module.exports = ServicesContainer;

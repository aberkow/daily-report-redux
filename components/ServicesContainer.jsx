import React from 'react';
import Services from './Services';

import Paper from 'material-ui/Paper';

class ServicesContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Services studentName={this.props.studentName} />
      </div>
    );
  };
};

module.exports = ServicesContainer;

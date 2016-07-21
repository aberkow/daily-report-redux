import React from 'react';

import DailyWork from './DailyWork';

class DailyWorkContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <DailyWork
        studentName={this.props.studentName}
        studentWork={this.props.studentWork} />
    );
  };
};

module.exports = DailyWorkContainer;

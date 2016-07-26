import React from 'react';

import DailyWork from './DailyWork';
import Reinforcers from './Reinforcers';


class DailyWorkContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    return(
      <div>
        <DailyWork
          studentName={this.props.studentName}
           />
         <Reinforcers
           reinforcerKind={this.props.reinreinforcerKind}
           reinforcerChecked={this.props.reinforcerChecked} />
      </div>
    );
  };
};

module.exports = DailyWorkContainer;

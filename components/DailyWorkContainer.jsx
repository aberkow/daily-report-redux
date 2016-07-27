import React from 'react';

import DailyWork from './DailyWork';
import ReinforcerList from './ReinforcerList';


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
         <ReinforcerList reinforcersArray={this.props.reinforcersArray}/>
      </div>
    );
  };
};

module.exports = DailyWorkContainer;

// reinforcerKind={this.props.reinreinforcerKind}
// reinforcerChecked={this.props.reinforcerChecked}

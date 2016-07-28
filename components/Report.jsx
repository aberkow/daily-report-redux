import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import StudentMoodContainer from './StudentMoodContainer';
import ServicesContainer from './ServicesContainer';
import DailyWorkContainer from './DailyWorkContainer';

const actions = require('../js/actions');

class Report extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log(this.props, 'from Report');
  }
  render(){
    return(
      <div>
        <Header />

        <StudentMoodContainer mood={this.props.mood} studentName={this.props.name} />

        <ServicesContainer studentName={this.props.name}
          servicesArray={this.props.servicesArray} />

        <DailyWorkContainer studentName={this.props.name}
          reinforcersArray={this.props.reinforcersArray}  />
      </div>
    );
  };
};

var mapStateToProps = function(state, props){
  return{
    name: state.name,
    date: state.date,
    mood: state.mood,
    servicesArray: state.servicesArray,
    work: state.work,
    reinforcer: state.reinforcer,
    reinforcersArray: state.reinforcersArray
  }
}

var Container = connect(mapStateToProps)(Report);

module.exports = Container;

// reinforcerKind={this.props.reinforcersArray.kind}
// reinforcerChecked={this.props.reinforcersArray.checked}

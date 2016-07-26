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
        <StudentMoodContainer mood={this.props.mood} />
        <ServicesContainer />
        <DailyWorkContainer />
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
    reinforcersArray: state.reinforcersArray
  }
}

var Container = connect(mapStateToProps)(Report);

module.exports = Container;
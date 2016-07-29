import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

class Header extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props, 'from Header');
    this.setDate = this.setDate.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
  }
  setDate(reserved, date){
    //reserved needs to be the first argument. It's actually null as per
    //the material-ui docs.
    console.log(date, 'from header setDate');
    //evt.preventDefault();
    // var date = this.refs.input.value;
    // console.log(date, 'from Header setDate');

    this.props.dispatch(actions.setDate(date));
    this.props.dispatch(actions.fetchDateFact(date));
  }
  setStudentName(evt){
    evt.preventDefault();
    var studentName = evt.target.value;
    this.props.dispatch(actions.setName(studentName));
  }
  render(){
    return(
      <div id='header'>
        <header>
          <form onSubmit={this.props.submitNameAndDate}>
            <TextField
              hintText="Student's name"
              floatingLabelText="Student's name"
              name='name'
              id='student-name'
              onChange={this.setStudentName} />
            <DatePicker
              autoOk={true}
              hintText="Today's Date"
              shouldDisableDate={this.disableWeekends}
              onChange={this.setDate} />
          </form>
        </header>
      </div>
    );
  };
};

var Container = connect()(Header);
module.exports = Container;

// value={this.props.currentDate}
//onChange={this.props.setReportDate}

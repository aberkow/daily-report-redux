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
              onChange={this.setStudentName}
              className='header__padding' />
            <DatePicker
              autoOk={true}
              hintText="Today's Date"
              shouldDisableDate={this.disableWeekends}
              onChange={this.setDate}
              className='header__padding' />
          </form>
          <h3 className='header__padding'>Daily fact!</h3>
          <p className='header__padding-text'>{this.props.dateFact}</p>
        </header>
      </div>
    );
  };
};

var Container = connect()(Header);
module.exports = Container;

// value={this.props.currentDate}
//onChange={this.props.setReportDate}

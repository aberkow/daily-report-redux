import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

class Header extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props, 'from Header');
    this.setStudentName = this.setStudentName.bind(this);
  }
  setStudentName(evt){
    evt.preventDefault();
    var studentName = evt.target.value;
    this.props.dispatch(actions.setName(studentName));
  }
  render(){
    return(
      <div>
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
              value={this.props.currentDate}
              onChange={this.props.setReportDate} />
          </form>
        </header>
      </div>
    );
  };
};

var Container = connect()(Header);
module.exports = Container;

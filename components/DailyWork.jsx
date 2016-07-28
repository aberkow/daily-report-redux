import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import SchoolWork from 'material-ui/svg-icons/custom/school-work';

class DailyWork extends React.Component{
  constructor(props){
    super(props);
    this.setStudentWork = this.setStudentWork.bind(this);
  }
  setStudentWork(evt){
    var studentWork = evt.target.value;
    this.props.dispatch(actions.setWork(studentWork));
  }
  render(){
    const iconStyle = {
      height: 50,
      width: 50
    };
    const paperStyle = {
      height: 60,
      width: 60,
      textAlign: 'center',
      display: 'inline-block'
    };
    const workAreaStyle = {
      display: 'inline-block'
    }
    return(
      <div id='student-work-container'>
        <Paper style={paperStyle} children={<SchoolWork style={iconStyle} />} />
        <div className='student-work-text-container'>
          <h3 className='report__subheader'>{this.props.studentName} worked on</h3>
          <TextField
            multiLine={true}
            hintText="Today's classwork"
            name='work'
            id='student-work'
            style={workAreaStyle}
            onChange={this.setStudentWork} />
        </div>
      </div>
    );
  };
};

var Container = connect()(DailyWork);
module.exports = Container;

import React from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import SchoolWork from 'material-ui/svg-icons/custom/school-work';

class DailyWork extends React.Component{
  constructor(props){
    super(props);
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
      <div>
        <Paper style={paperStyle} children={<SchoolWork style={iconStyle} />} />
        <div>
          <h3>{this.props.studentName} worked on</h3>
          <TextField
            multiLine={true}
            hintText="Today's classwork"
            name='work'
            id='student-work'
            style={workAreaStyle}
            onChange={this.props.setStudentWork} />
        </div>
      </div>
    );
  };
};

module.exports = DailyWork;

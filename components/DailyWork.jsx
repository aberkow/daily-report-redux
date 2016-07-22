import React from 'react';

import TextField from 'material-ui/TextField';

class DailyWork extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const paperStyle = {
      height: 100,
      width: 100,
      textAlign: 'center',
    };
    return(
      <div>
        <h3>{this.props.studentName} worked on</h3>
        <TextField
          multiLine={true}
          hintText="Today's classwork"
          name='work'
          id='student-work'
          onChange={this.props.setStudentWork} />
      </div>
    );
  };
};

module.exports = DailyWork;

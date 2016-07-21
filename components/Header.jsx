import React from 'react';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

class Header extends React.Component{
  constructor(props){
    super(props);
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
              onChange={this.props.setStudentName} />
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

module.exports = Header;

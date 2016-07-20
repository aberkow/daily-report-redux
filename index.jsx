import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

//required to get components to register clicks & display dialogs.
injectTapEventPlugin();

class MoodContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

    );
  };
};

class PhysicalContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

    );
  };
};

class ActivitiesContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

    );
  };
};

class ServicesContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

    );
  };
};

class FoodContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

    );
  };
};

class WorkContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(

    );
  };
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      studentName: '',
      reportDate: null
    }
    this.disableWeekends = this.disableWeekends.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
    this.setReportDate = this.setReportDate.bind(this);
  }
  disableWeekends(date){
    return date.getDay() === 0 || date.getDay() === 6;
  }
  setStudentName(evt){
    var studentName = evt.target.value;
    this.setState({studentName: studentName});
  }
  setReportDate(evt, date){
    this.setState({reportDate: date})
    console.log(this.state.reportDate, 'from setReportDate');
  }
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <header>
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
              value={this.state.reportDate}
              onChange={this.setReportDate} />
          </header>

        </div>
      </MuiThemeProvider>
    );
  }
};

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App />, document.getElementById('app'));
});

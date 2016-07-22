import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//
import DailyWorkContainer from './components/DailyWorkContainer';
import Header from './components/Header';
import ServicesContainer from './components/ServicesContainer';
import StudentMoodContainer from './components/StudentMoodContainer';

//component imports - menu multi-select available
//set <Menu multiple={true} />
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

//required to get components to register clicks & display dialogs.
injectTapEventPlugin();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      studentName: '',
      reportDate: null,
      studentWork: '',
      reinforcersArray: []
    }
    console.log(this.state, this.props, 'from index');
    this.disableWeekends = this.disableWeekends.bind(this);
    this.submitNameAndDate = this.submitNameAndDate.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
    this.setReinforcers = this.setReinforcers.bind(this);
    this.setReportDate = this.setReportDate.bind(this);
    this.setStudentWork = this.setStudentWork.bind(this);
  }
  disableWeekends(date){
    return date.getDay() === 0 || date.getDay() === 6;
  }
  setReinforcers(evt){
    //perhaps icon style can be set here using true or false.
    //an if block could set concat or remove the selected item as well.
    console.log(evt.target.id, 'from reinforcers');
    var reinforcer = evt.target.id;
    var oldReinforcersArray = this.state.reinforcersArray;
    var newReinforcersArray = oldReinforcersArray.concat(reinforcer);
    this.setState( {reinforcersArray: newReinforcersArray} );
  }
  setReportDate(evt, date){
    this.setState( {reportDate: date} );
    console.log(this.state.reportDate, 'from setReportDate');
  }
  setStudentName(evt){
    var studentName = evt.target.value;
    this.setState( {studentName: studentName} );
    console.log(this.state.studentName);
  }
  setStudentWork(evt){
    var studentWork = evt.target.value;
    this.setState( {studentWork: studentWork} );
  }
  submitNameAndDate(evt){
    evt.preventDefault();
    console.log(evt.target);
  }
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Header submitNameAndDate={this.submitNameAndDate}
          setStudentName={this.setStudentName}
          setReportDate={this.setReportDate}
          currentDate={this.state.reportDate} />
          <StudentMoodContainer
            studentName={this.state.studentName} />
          <DailyWorkContainer
            studentName={this.state.studentName}
            setReinforcers={this.setReinforcers}
            setStudentWork={this.setStudentWork} />
          <ServicesContainer studentName={this.state.studentName} />
        </div>
      </MuiThemeProvider>
    );
  }
};

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App />, document.getElementById('app'));
});

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//icon imports
import SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SocialSentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SocialSentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

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

const iconStyle = {
  height: 100,
  width: 100
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      studentName: '',
      reportDate: null,
      studentWork: '',
      studentMood: 1,
      reinforcersArray: [],
      servicesArray: []
    }
    console.log(this.state, this.props, 'from index');
    this.disableWeekends = this.disableWeekends.bind(this);
    this.moodIconHandler = this.moodIconHandler.bind(this);
    this.submitNameAndDate = this.submitNameAndDate.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
    this.setReinforcers = this.setReinforcers.bind(this);
    this.setReportDate = this.setReportDate.bind(this);
    this.setStudentMood = this.setStudentMood.bind(this);
    this.setStudentWork = this.setStudentWork.bind(this);
  }
  disableWeekends(date){
    return date.getDay() === 0 || date.getDay() === 6;
  }
  moodIconHandler(value){
    switch (value) {
      case 2:
        return <SocialSentimentSatisfied style={iconStyle} />;
        break;
      case 3:
        return <SocialSentimentDissatisfied style={iconStyle} />;
        break;
      case 4:
        return <SocialSentimentVeryDissatisfied style={iconStyle} />;
        break;
      default:
        return <SocialSentimentVerySatisfied style={iconStyle} />;
    }
  }
  setReinforcers(evt){
    //perhaps icon style can be set here using true or false.
    //an if block could set concat or remove the selected item as well.
    console.log(evt.target.nextSibling.lastChild.textContent, 'from setReinforcers');
    var reinforcer = evt.target.nextSibling.lastChild.textContent;
    var oldReinforcersArray = this.state.reinforcersArray;
    var newReinforcersArray = oldReinforcersArray.concat(reinforcer);
    //as soon as I call this.setState the icons break?
    //this.setState( {reinforcersArray: newReinforcersArray} );

    // var foundReinforcer = oldReinforcersArray.find(function(reinforcer){
    //   console.log(reinforcer, 'from foundReinforcer');
    //   return reinforcer;
    // });
    // console.log(foundReinforcer);

    // if (oldReinforcersArray.find(reinforcer)){
    //   newReinforcersArray = oldReinforcersArray.splice(reinforcer, 1);
    //   this.setState( {reinforcersArray: newReinforcersArray} );
    // } else {
    //   newReinforcersArray = oldReinforcersArray.concat(reinforcer);
    //   this.setState( {reinforcersArray: newReinforcersArray} );
    // }
  }
  setReportDate(evt, date){
    this.setState( {reportDate: date} );
    console.log(this.state.reportDate, 'from setReportDate');
  }
  setStudentMood(evt, index, studentMood){
    return this.setState( {studentMood} );
  }
  setServices(){

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
            value={this.state.studentMood}
            studentName={this.state.studentName}
            setStudentMood={this.setStudentMood}
            moodIconHandler={this.moodIconHandler(this.state.studentMood)} />

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

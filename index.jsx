import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//
import DailyWorkContainer from './components/DailyWorkContainer';
import Header from './components/Header';
import StudentMoodContainer from './components/StudentMoodContainer';

//component imports
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
// import DropDownMenu from 'material-ui/DropDownMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
// import MenuItem from 'material-ui/MenuItem';
// import Paper from 'material-ui/Paper';
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
      studentWork: ''
    }
    console.log(this.state, this.props);
    this.disableWeekends = this.disableWeekends.bind(this);
    this.submitNameAndDate = this.submitNameAndDate.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
    this.setReportDate = this.setReportDate.bind(this);
    this.setStudentWork = this.setStudentWork.bind(this);
  }
  disableWeekends(date){
    return date.getDay() === 0 || date.getDay() === 6;
  }
  submitNameAndDate(evt){
    evt.preventDefault();
    console.log(evt.target);
  }
  setStudentName(evt){
    var studentName = evt.target.value;
    this.setState( {studentName: studentName} );
    console.log(this.state.studentName);
  }
  setReportDate(evt, date){
    this.setState( {reportDate: date} );
    console.log(this.state.reportDate, 'from setReportDate');
  }
  setStudentWork(evt){
    var studentWork = evt.target.value;
    this.setState( {studentWork: studentWork} );
  }
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Header submitNameAndDate={this.submitNameAndDate}
          setStudentName={this.setStudentName}
          setReportDate={this.setReportDate}
          currentDate={this.state.reportDate} />
          <DailyWorkContainer studentName={this.state.studentName}
          setStudentWork={this.setStudentWork} />
          <StudentMoodContainer
            studentName={this.state.studentName} />
        </div>
      </MuiThemeProvider>
    );
  }
};

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App />, document.getElementById('app'));
});


// <DropDownMenu value={this.state.value} onChange={this.changeHandler}>
//   <MenuItem value={1} primaryText='Very Happy' leftIcon={<VeryHappy />} />
//   <MenuItem value={2} primaryText='Happy' leftIcon={<Happy />} />
//   <MenuItem value={3} primaryText='Sad' leftIcon={<Sad />} />
//   <MenuItem value={4} primaryText='Mad' leftIcon={<Mad />} />
// </DropDownMenu>



// var moodIcons = this.props.moodIconArray.map(function(moodIcon, index){
//   return (
//
//   );
// });

//array of moods to pass as props to select an icon

//
// class PhysicalContainer extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//
//     );
//   };
// };
//
// class ActivitiesContainer extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//
//     );
//   };
// };
//
// class ServicesContainer extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//
//     );
//   };
// };
//
// class FoodContainer extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//
//     );
//   };
// };
//
// class WorkContainer extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//
//     );
//   };
// };

//icon imports
// import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';
// import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
// import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
// import Mad from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

// class StudentMood extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(this.props);
//   }
//   render(){
//
//     const paperStyle = {
//       height: 100,
//       width: 100,
//       textAlign: 'center',
//     };
//     return(
//       <div>
//         <h2>{this.props.studentName} was</h2>
//         <DropDownMenu value={this.props.value} onChange={this.props.selectMood}>
//           <MenuItem value={1} primaryText='Very Happy' leftIcon={<VeryHappy />} />
//           <MenuItem value={2} primaryText='Happy' leftIcon={<Happy />} />
//           <MenuItem value={3} primaryText='Sad' leftIcon={<Sad />} />
//           <MenuItem value={4} primaryText='Mad' leftIcon={<Mad />} />
//         </DropDownMenu>
//         <Paper zDepth={2} style={paperStyle} children={this.props.moodHandler} />
//       </div>
//     );
//   };
// };
//
// class StudentMoodContainer extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       value: 1
//     }
//     this.changeHandler = this.changeHandler.bind(this);
//     this.moodIconHandler = this.moodIconHandler.bind(this);
//   }
//   changeHandler(evt, index, value){
//     return this.setState({value});
//   }
//   moodIconHandler(value){
//     //const value = this.state.value;
//     switch (value) {
//       case value === 2:
//         return <Happy />;
//         break;
//       case value === 3:
//         return <Sad />;
//         break;
//       case value === 4:
//         return <Mad />;
//         break;
//       default:
//         return <VeryHappy />;
//     }
//   }
//   render(){
//     return(
//       <div>
//         <StudentMood
//           value={this.state.value}
//           studentName={this.props.studentName}
//           selectMood={this.changeHandler}
//           moodHandler={this.moodIconHandler(this.state.value)} />
//       </div>
//     );
//   };
// };
//
// StudentMoodContainer.defaultProps = {
//   moodIconArray: [
//
//   ]
// }

// <header>
//   <form submitNameAndDate={this.submitNameAndDate}>
//     <TextField
//       hintText="Student's name"
//       floatingLabelText="Student's name"
//       name='name'
//       id='student-name'
//       onChange={this.setStudentName} />
//     <DatePicker
//       autoOk={true}
//       hintText="Today's Date"
//       shouldDisableDate={this.disableWeekends}
//       value={this.state.reportDate}
//       onChange={this.setReportDate} />
//
//
//   </form>
//
// </header>


/*<FloatingActionButton type='submit' mini={true}>
   <ContentAdd />
 </FloatingActionButton>*/

import React from 'react';
import StudentMood from './StudentMood';

//icon imports
import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Mad from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

class StudentMoodContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 1
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.moodIconHandler = this.moodIconHandler.bind(this);
  }
  changeHandler(evt, index, value){
    return this.setState({value});
  }
  moodIconHandler(value){
    //const value = this.state.value;
    switch (value) {
      case value === 2:
        return <Happy />;
        break;
      case value === 3:
        return <Sad />;
        break;
      case value === 4:
        return <Mad />;
        break;
      default:
        return <VeryHappy />;
    }
  }
  render(){
    return(
      <div>
        <StudentMood
          value={this.state.value}
          studentName={this.props.studentName}
          selectMood={this.changeHandler}
          moodHandler={this.moodIconHandler(this.state.value)} />
      </div>
    );
  };
};

module.exports = StudentMoodContainer;

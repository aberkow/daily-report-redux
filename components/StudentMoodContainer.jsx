import React from 'react';
import StudentMood from './StudentMood';

class StudentMoodContainer extends React.Component{
  constructor(props){
    super(props);

  }
  render(){

    return(
      <div>
        <StudentMood
          value={this.props.value}
          studentName={this.props.studentName}
          setStudentMood={this.props.setStudentMood}
          moodIconHandler={this.props.moodIconHandler} />
      </div>
    );
  };
};

module.exports = StudentMoodContainer;

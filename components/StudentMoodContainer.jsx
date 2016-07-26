import React from 'react';
import StudentMood from './StudentMood';

class StudentMoodContainer extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const studentMoodStyle = {
      display: 'inline-block'
    }
    return(
      <div style={studentMoodStyle}>
        <StudentMood
          value={this.props.mood}
          studentName={this.props.studentName} />
      </div>
    );
  };
};

module.exports = StudentMoodContainer;

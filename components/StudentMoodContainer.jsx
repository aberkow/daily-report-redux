import React from 'react';
import StudentMood from './StudentMood';

//icon imports
import SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SocialSentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SocialSentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

const iconStyle = {
  height: 100,
  width: 100
}

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

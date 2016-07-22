import React from 'react';

//icon imports
import SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SocialSentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SocialSentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

import SchoolWork from 'material-ui/svg-icons/custom/school-work';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class StudentMood extends React.Component{
  constructor(props){
    super(props);
    //console.log(this.props);
  }
  render(){

    const paperStyle = {
      height: 100,
      width: 100,
      textAlign: 'center',
    };
    return(
      <div>
        <h3>{this.props.studentName} was</h3>
        
        <DropDownMenu value={this.props.value} onChange={this.props.selectMood}>
          <MenuItem value={1} primaryText='Very Happy' leftIcon={<SocialSentimentVerySatisfied />} />
          <MenuItem value={2} primaryText='Happy' leftIcon={<SocialSentimentSatisfied />} />
          <MenuItem value={3} primaryText='Sad' leftIcon={<SocialSentimentDissatisfied />} />
          <MenuItem value={4} primaryText='Mad' leftIcon={<SocialSentimentVeryDissatisfied />} />
        </DropDownMenu>
        <Paper zDepth={2} style={paperStyle} children={this.props.moodHandler} />
      </div>
    );
  };
};

module.exports = StudentMood;

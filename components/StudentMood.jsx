import React from 'react';

//icon imports
import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Mad from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class StudentMood extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
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
          <MenuItem value={1} primaryText='Very Happy' leftIcon={<VeryHappy />} />
          <MenuItem value={2} primaryText='Happy' leftIcon={<Happy />} />
          <MenuItem value={3} primaryText='Sad' leftIcon={<Sad />} />
          <MenuItem value={4} primaryText='Mad' leftIcon={<Mad />} />
        </DropDownMenu>
        <Paper zDepth={2} style={paperStyle} children={this.props.moodHandler} />
      </div>
    );
  };
};

module.exports = StudentMood;

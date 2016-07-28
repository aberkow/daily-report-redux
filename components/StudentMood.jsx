import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions')
//icon imports
import SocialSentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import SocialSentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
import SocialSentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

//import components
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const iconStyle = {
  height: 100,
  width: 100
}
const paperStyle = {
  height: 100,
  width: 100,
  textAlign: 'center',
};

class StudentMood extends React.Component{
  constructor(props){
    super(props);
    this.setStudentMood = this.setStudentMood.bind(this);
    this.moodIconHandler = this.moodIconHandler.bind(this);
    console.log(this.props);
  }
  setStudentMood(evt){
    evt.preventDefault();
    this.props.dispatch(actions.setMood(evt.target.innerHTML));

  }
  moodIconHandler(mood){
    switch (mood) {
      case 'Happy':
        return <SocialSentimentSatisfied style={iconStyle} />;
        break;
      case 'Sad':
        return <SocialSentimentDissatisfied style={iconStyle} />;
        break;
      case 'Mad':
        return <SocialSentimentVeryDissatisfied style={iconStyle} />;
        break;
      default:
        return <SocialSentimentVerySatisfied style={iconStyle} />;
    }
  }
  render(){
    return(
      <div id='student-mood'>
        <h3 className='report__subheader'>{this.props.studentName} was</h3>

        <DropDownMenu className='student-mood__dropdown' value={this.props.value} onChange={this.setStudentMood}>
          <MenuItem value='Very Happy' primaryText='Very Happy' leftIcon={<SocialSentimentVerySatisfied />} />
          <MenuItem value='Happy' primaryText='Happy' leftIcon={<SocialSentimentSatisfied />} />
          <MenuItem value='Sad' primaryText='Sad' leftIcon={<SocialSentimentDissatisfied />} />
          <MenuItem value='Mad' primaryText='Mad' leftIcon={<SocialSentimentVeryDissatisfied />} />
        </DropDownMenu>
        <Paper className='student-mood__icon-container' zDepth={2} style={paperStyle} children={this.moodIconHandler(this.props.value)} />
      </div>
    );
  };
};

var Container = connect()(StudentMood);
module.exports = Container;

import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import BorderColor from 'material-ui/svg-icons/editor/border-color'
import DirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import QuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';

class Services extends React.Component{
  constructor(props){
    super(props);
    this.highlightServices = this.highlightServices.bind(this);
  }
  //needs better selection of elements...
  highlightServices(evt){
    console.log(evt.target);
  }
  render(){
    const iconStyle = {
      height: 40,
      width: 40
    };
    const paperStyle = {
      height: 80,
      width: 80,
      textAlign: 'center',
      display: 'inline-block',
    };
    // const textStyle = {
    //   margin: 5, 'auto'
    // }
    // var services = this.props.servicesArray.map(function(service, index){
    //   return(
    //     <MenuItem key={index} primaryText={service} />
    //   );
    // });
    return(
      <div>
        <h3>Today, {this.props.studentName} went to:</h3>
        <div onClick={this.highlightServices}>
          <Paper style={paperStyle}
            children={
              <div>
                <p>OT</p>
                <BorderColor style={iconStyle} />
              </div>
            } />
          <Paper style={paperStyle}
            children={
              <div>
                <p>PT</p>
                <DirectionsRun style={iconStyle} />
              </div>
            } />
          <Paper style={paperStyle}
            children={
              <div>
                <p>Speech</p>
                <QuestionAnswer style={iconStyle} />
              </div>
            } />
          <Paper style={paperStyle}
            children={
              <div>
                <p>ABA</p>
                <TrendingUp style={iconStyle} />
              </div>
            } />
        </div>
      </div>
    );
  };
};

// <Menu multiple={true}>
//   <MenuItem primaryText={this.props.servicesArray[0]} />
//   <MenuItem primaryText={this.props.servicesArray[1]} />
//   <MenuItem primaryText={this.props.servicesArray[2]} />
//   <MenuItem primaryText={this.props.servicesArray[3]} />
// </Menu>
//
//
// Services.defaultProps = {
//   servicesArray: ['ABA Therapy', 'Occupational Therapy', 'Physical Therapy', 'Speech Therapy']
// };

module.exports = Services;

import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');
const classNames = require('classnames');

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
    this.state = {
      highlighted: false
    }
    this.highlightServices = this.highlightServices.bind(this);
  }
  //needs better selection of elements...
  highlightServices(evt){
    var service = evt.target.innerText;
    console.log(service, 'from highlightServices');

    this.props.dispatch(actions.setService(service))
  }
  render(){
    const iconStyle = {
      height: 24,
      width: 24
    };
    const textStyle = {
      cursor: 'pointer'
    };
    const paperStyle = {
      height: 80,
      width: 80,
      marginLeft: 10,
      textAlign: 'center',
      display: 'inline-block'
    };

    //add css file to set className to highlightServices
    return(
      <div>
        <h3>Today, {this.props.studentName} went to:</h3>
        <div>
          <Paper

            className={this.state.highlighted ? 'highlighted' : ''}
            onClick={this.highlightServices}
            style={paperStyle}
            children={
              <div>
                <p style={textStyle}>OT</p>
                <BorderColor style={iconStyle} />
              </div>
            } />
          <Paper

            className={this.state.highlighted ? 'highlighted' : ''}
            onClick={this.highlightServices}
            style={paperStyle}
            children={
              <div>
                <p style={textStyle}>PT</p>
                <DirectionsRun style={iconStyle} />
              </div>
            } />
          <Paper

            className={this.state.highlighted ? 'highlighted' : ''}
            onClick={this.highlightServices}
            style={paperStyle}
            children={
              <div>
                <p style={textStyle}>Speech</p>
                <QuestionAnswer style={iconStyle} />
              </div>
            } />
          <Paper

            className={this.state.highlighted ? 'highlighted' : ''}
            onClick={this.highlightServices}
            style={paperStyle}
            children={
              <div>
                <p style={textStyle}>ABA</p>
                <TrendingUp style={iconStyle} />
              </div>
            } />
        </div>
      </div>
    );
  };
};

var Container = connect()(Services);
module.exports = Container;

// <Paper
//   key={index}
//   onClick={this.highlightServices}
//   style={paperStyle}
//   children={
//     <div>
//       <p style={textStyle}>{service}</p>
//       {iconTypes[index]}
//     </div>
//   } />





// var servicesArray = [
//   {
//     serviceType: 'OT',
//     iconType: <BorderColor style={iconStyle} />
//   },
//   {
//     serviceType: 'PT',
//     iconType: <DirectionsRun style={iconStyle} />
//   },
//   {
//     serviceType: 'Speech',
//     iconType: <QuestionAnswer style={iconStyle} />
//   },
//   {
//     serviceType: 'ABA',
//     iconType: <BorderColor style={iconStyle} />
//   }
// ];
//
// var services = servicesArray.map(function(service, index){
//   return(
//     <Paper key={index}
//       onClick={this.highlightServices}
//       style={paperStyle}
//       service={service.serviceType}
//       children={
//
//           <div>
//             <p>{service.serviceType}</p>
//             {service.iconType}
//           </div>
//
//       }/>
//   );
// });
//
//
//

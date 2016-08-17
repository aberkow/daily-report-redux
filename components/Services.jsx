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
    this.highlightServices = this.highlightServices.bind(this);
    this.clickTest = this.clickTest.bind(this);
  }
  clickTest(evt){
    var target = evt.target;
    if (target.id === document.getElementById('tester')) {
      target.classList.toggle('highlighted');
    };

    console.log(target);
  }
  highlightServices(evt){
    var target = evt.target;
    var service = target.innerText;
    var paper = target.parentNode.parentNode;
    //console.log(service, target, paper, paper.classList, 'from highlightServices');
    paper.classList.toggle("highlighted");
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
    return(
      <div>
        <h3 className='report__subheader'>Today, {this.props.studentName} went to:</h3>
        <div>
            <Paper onClick={this.clickTest} style={paperStyle} id="tester">
              <p style={textStyle}>OT</p>
              <BorderColor style={iconStyle} />
            </Paper>

            <Paper
              style={paperStyle}
              children={
                <div>
                  <p onClick={this.highlightServices}

                     style={textStyle}>OT</p>
                  <BorderColor style={iconStyle} />
                </div>
              } />
          <Paper


            onClick={this.highlightServices}
            style={paperStyle}
            children={
              <div>
                <p style={textStyle}>PT</p>
                <DirectionsRun style={iconStyle} />
              </div>
            } />
          <Paper


            onClick={this.highlightServices}
            style={paperStyle}
            children={
              <div>
                <p style={textStyle}>Speech</p>
                <QuestionAnswer style={iconStyle} />
              </div>
            } />
          <Paper


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


// className={paperClass}
// className={paperClass}
// className={paperClass}
// className={paperClass}

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

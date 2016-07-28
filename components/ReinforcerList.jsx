import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ReinforcerList extends React.Component{
  constructor(props){
    super(props);
    this.deleteReinforcer = this.deleteReinforcer.bind(this);
    this.submitReinforcer = this.submitReinforcer.bind(this);
  }
  deleteReinforcer(evt){
    evt.preventDefault();
    var reinforcerToDelete = evt.target.parentNode.parentNode.parentNode;
    var reinforcerList = document.getElementById('reinforcerList');

    //almost works. gets a little weird when the last item is removed.
    this.props.dispatch(actions.removeReinforcer(reinforcerToDelete.id));
    reinforcerToDelete.parentNode.removeChild(reinforcerToDelete);
  }
  submitReinforcer(evt){
    evt.preventDefault();
    //call getValue() instead of value.
    var reinforcer = this.refs.reinforcer.getValue();
    this.props.dispatch(actions.setReinforcer(reinforcer));
    this.refs.reinforcerForm.reset();
  }
  render(){
    var reinforcerItem = this.props.reinforcersArray.map(function(reinforcer, index){
      return(
        <div key={index} id={reinforcer}>
          <li key={'item' + index}>
            {reinforcer}
            <span>
              <button
              type='button'
              key={'deleteButton' + index}
              onClick={this.deleteReinforcer}>Delete</button>
            </span>
          </li>
        </div>
      );
    }, this);
    return(
      <div id='student-reinforcer-container'>
        <form ref='reinforcerForm' onSubmit={this.submitReinforcer}>
          <TextField
            hintText='Add reinforcers'
            floatingLabelText='Reinforcers'
            name='reinforcers'
            ref='reinforcer' />
          <FloatingActionButton mini={true} type='submit'>
            <ContentAdd />
          </FloatingActionButton>
        </form>
        <ul id='reinforcerList'>
          {reinforcerItem}
        </ul>
      </div>
    );
  };
};

var Container = connect()(ReinforcerList);
module.exports = Container;



// <RaisedButton
//   key={index}
//   label='Delete'
//   secondary={true}
//   onClick={this.deleteReinforcer} />




// class Reinforcers extends React.Component{
//   constructor(props){
//     super(props);
//     this.setReinforcers = this.setReinforcers.bind(this);
//     console.log(this.props, 'from Reinforcers');
//   }
//   setReinforcers(evt){
//     //console.log(evt.target, 'from setReinforcers');
//     evt.preventDefault();
//     var reinforcer = evt.target.nextSibling.lastChild.textContent;
//     var checkedStatus = true;
//
//     //if ()
//
//
//     this.props.dispatch(actions.setReinforcer(reinforcer, checkedStatus));
//     console.log(this.props, 'from setReinforcers');
//   }
//   render(){
//     const style = {
//       display: 'inline-block'
//     }
//     var reinfocerList = this.props.reinforcerPropsArray.map(function(reinforcer, index){
//       return(
//         <Checkbox style={style} key={index}
//           label={reinforcer}
//           checkedIcon={<ActionFavorite />}
//           uncheckedIcon={<ActionFavoriteBorder />}
//           checked={this.props.reinforcerChecked}
//           onCheck={this.setReinforcers} />
//       );
//     }.bind(this));
//
//     return(
//       <div>
//         <h3>Reinforcers</h3>
//         {reinfocerList}
//         <TextField
//           hintText='Other reinforcers'
//           floatingLabelText='Other reinforcers'
//           name='otherReinforcers'
//           id='other-reinforcers'
//           style={style} />
//       </div>
//     );
//   };
// };
//
// Reinforcers.defaultProps = {
//   reinforcerPropsArray: ['Bicycle', 'iPad', 'Extra Snack', 'Slide', 'Wagon']
// };

// var Container = connect()(Reinforcers);
// module.exports = Container;

// <ul onClick={this.props.setReinforcers} className='reinfocer__list'>
//   {reinforcers}
// </ul>

// checkedIcon={<ActionFavorite key={'favorite' + index} />}
// uncheckedIcon={<ActionFavoriteBorder key={'favorite-border' + index} />}

// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   id='test'
//   label='iPad' />
// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   label='Slide' />
// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   label='Wagon' />
// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   label='Other' />

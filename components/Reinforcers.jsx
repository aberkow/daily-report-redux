import React from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';

class Reinforcers extends React.Component{
  constructor(props){
    super(props);
    this.setReinforcers = this.setReinforcers.bind(this);
  }
  setReinforcers(evt){
    evt.preventDefault();
    var reinforcer = evt.target.nextSibling.lastChild.textContent;
    this.props.dispatch(actions.setReinforcer(reinforcer));
  }
  render(){
    const style = {
      display: 'inline-block'
    }
    var reinfocerList = this.props.reinforcerPropsArray.map(function(reinforcer, index){
      return(
        <Checkbox style={style} key={index}
          label={reinforcer}
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          onCheck={this.setReinforcers} />
      );
    }.bind(this));

    return(
      <div>
        <h3>Reinforcers</h3>
        {reinfocerList}
        <TextField
          hintText='Other reinforcers'
          floatingLabelText='Other reinforcers'
          name='otherReinforcers'
          id='other-reinforcers'
          style={style} />
      </div>
    );
  };
};

Reinforcers.defaultProps = {
  reinforcerPropsArray: ['Bicycle', 'iPad', 'Extra Snack', 'Slide', 'Wagon']
};

var Container = connect()(Reinforcers);
module.exports = Container;

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

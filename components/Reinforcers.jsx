import React from 'react';

// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import Checkbox from 'material-ui/Checkbox';

import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';

class Reinforcers extends React.Component{
  constructor(props){
    super(props);
    //this.favoriteToggle = this.favoriteToggle.bind(this);
  }
  // favoriteToggle(evt){
  //   var target = evt.target;
  //   console.log(target);
  // }
  render(){
    const styles = {
      favoriteBorder: {
        display: 'visible'
      },
      favorite: {
        display: 'hidden'
      }
    }
    var reinforcers = this.props.reinforcerPropsArray.map(function(reinforcer, index){
      return(

          <li key={index} className='reinforcer__list-item'>
            <span className='reinfocer__list-favorite'>
              <FavoriteBorder key={'favorite' + index} id={reinforcer} className='favorite-border' style={styles.favoriteBorder}/>
            </span>
            {reinforcer}
          </li>

      );
    });

    return(
      <div>
        <h3>Reinforcers</h3>
        <ul onClick={this.props.setReinforcers} className='reinfocer__list'>
          {reinforcers}
        </ul>
        <TextField
          hintText='Other reinforcers'
          floatingLabelText='Other reinforcers'
          name='otherReinforcers'
          id='other-reinforcers' />
        
      </div>
    );
  };
};

Reinforcers.defaultProps = {
  reinforcerPropsArray: ['iPad', 'Extra Snack', 'Other', 'Slide', 'Wagon']
};

module.exports = Reinforcers;

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

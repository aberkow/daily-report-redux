var actions = require('./actions');

var reportState = {
  name: '',
  date: '',
  mood: 'Very Happy',
  servicesArray: [],
  work: '',
  reinforcer: '',
  reinforcersArray: []
}

//using var seems to be causing a problem...
var reportReducer = function(state, action){
  state = state || reportState;
  if (action.type === actions.SET_NAME){
    var name = action.name;
    var nameState = Object.assign({}, state, {
      name: name
    });
    return nameState;
  }
  else if (action.type === actions.SET_DATE){
    var date = actions.date;
    var dateState = Object.assign({}, state, {
      date: date
    });
    console.log(date, dateState, 'from setDate');
    return dateState;
  }
  else if (action.type === actions.SET_MOOD) {
    var mood = action.mood;
    var moodState = Object.assign({}, state, {
      mood: mood
    });
    console.log(mood, 'from mood reducer');
    return moodState;
  }
  else if (action.type === actions.SET_SERVICE) {
    var service = action.service;

    var servicesArray = state.servicesArray;
    var index = servicesArray.indexOf(service);
    console.log(index, 'from setService reducer');
    var servicesState;

    //doesn't quite work. check redux dev tools
    if (index !== -1){
      servicesState = Object.assign({}, state, {
        servicesArray: servicesArray.splice(index, 1)
      });
    } else {
      servicesState = Object.assign({}, state, {
        servicesArray: servicesArray.concat(service)
      });
    }

    // var servicesState = Object.assign({}, state, {
    //   servicesArray: servicesArray.concat(service)
    // });
    return servicesState;
  }
  else if (action.type === actions.SET_WORK) {
    var work = action.work;
    var workState = Object.assign({}, state, {
      work: work
    });
    return workState;
  }
  else if (action.type === actions.SET_REINFORCER) {
    var reinforcer = action.reinforcer;
    var reinforcersArray = state.reinforcersArray;
    var reinforcersState = Object.assign({}, state, {
      reinforcersArray: reinforcersArray.concat(reinforcer)
    });
    return reinforcersState;
  }
  return state;
}

exports.reportReducer = reportReducer;



// var reinforcer = {
//   kind: action.reinforcerObj.kind,
//   checked: action.reinforcerObj.checked
// }
// var reinforcersArray = state.reinforcersArray;
// var reinforcersState = Object.assign({}, state, {
//   reinforcersArray: reinforcersArray.concat(reinforcer)
// });
// return reinforcersState;
// var reinforcer = action.reinforcerObj.kind;
// var checkedStatus = action.reinforcerObj.checked;
// var reinforcersArray = state.reinforcersArray;
// var reinforcersState = Object.assign({}, state, {
//   reinforcersArray: reinforcersArray.concat(reinforcer)
// });
// return reinforcersState;

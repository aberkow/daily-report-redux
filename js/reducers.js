var actions = require('./actions');

var reportState = {
  name: '',
  date: '',
  mood: 1,
  servicesArray: [],
  work: '',
  reinforcersArray: []
}

//using var seems to be causing a problem...
var reportReducer = function(state, action){
  state = state || reportState;
  if (action.type === actions.SET_NAME){
    var name = action.name;
    var reportState = Object.assign({}, state, {
      name: name
    });
    return reportState;
  }
  else if (action.type === actions.SET_DATE){
    //set the date of the report.
  }
  else if (action.type === actions.SET_MOOD) {
    var mood = action.mood;
    var reportState = Object.assign({}, state, {
      mood: mood
    });
    return reportState;
  }
  else if (action.type === actions.SET_SERVICES) {
    //set the array of services.
  }
  else if (action.type === actions.SET_WORK) {
    var work = action.work;
    var reportState = Object.assign({}, state, {
      work: work
    });
    return reportState;
  }
  else if (action.type === actions.SET_REINFORCERS) {
    //set the array of reinforcers.
  }
  return state;
}

exports.reportReducer = reportReducer;

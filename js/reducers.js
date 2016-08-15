var actions = require('./actions');

var reportState = {
  name: '',
  date: {},
  dateForFact: '',
  mood: 'Very Happy',
  servicesArray: [],
  work: '',
  reinforcer: '',
  reinforcersArray: [],
  isDrawerOpen: false
};

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
    //might need to handle the null that's returned from the date-picker.
    var date = action.date;
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

    if (index !== -1){
      var serviceRemoved = servicesArray.splice(index, 1);
      servicesState = Object.assign({}, state, {
        servicesArray: servicesArray
      });
    }
    else {
      servicesState = Object.assign({}, state, {
        servicesArray: servicesArray.concat(service)
      });
    }

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
  else if (action.type === actions.REMOVE_REINFORCER) {
    var reinforcerToRemove = action.reinforcerToRemove;
    var reinforcersArray = state.reinforcersArray;
    var index = reinforcersArray.indexOf(reinforcerToRemove);
    var reinforcerRemoved = reinforcersArray.splice(index, 1);
    var reinforcersArrayState = Object.assign({}, state, {
      reinforcersArray: reinforcersArray
    });
    return reinforcersArrayState;
  }
  else if (action.type === actions.TOGGLE_DRAWER) {
    var drawerState = Object.assign({}, state, {
      isDrawerOpen: !action.isOpen
    });
    return drawerState;
  }
  else if (action.type === actions.FETCH_DATE_FACT_SUCCESS) {
    var dateForFact = action.dateForFact;
    console.log(dateForFact, 'from FETCH_DATE_FACT_SUCCESS reducer');
    var dateForFactState = Object.assign({}, state, {
      dateForFact: dateForFact
    });
    return dateForFactState;
  }
  else if (action.type === actions.FETCH_DATE_FACT_ERROR) {
    throw new Error("There was an error fetching the fact.")
  }
  return state;
}

exports.reportReducer = reportReducer;

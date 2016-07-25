const SET_NAME = 'SET_NAME';
const setName = function(name){
  return {
    type: SET_NAME,
    name: name
  };
};

const SET_DATE = 'SET_DATE';
const setDate = function(date){
  return {
    type: SET_DATE,
    date: date
  };
};

const SET_MOOD = 'SET_MOOD';
const setMood = function(mood){
  return {
    type: SET_MOOD,
    mood: mood
  };
};

const SET_SERVICES = 'SET_SERVICES';
const setServices = function(servicesArray){
  return {
    type: SET_SERVICES,
    servicesArray: servicesArray
  }
}

const SET_WORK = 'SET_WORK';
const setWork = function(work){
  return {
    type: SET_WORK,
    work: work
  };
};

const SET_REINFORCERS = 'SET_REINFORCERS';
const setReinforcers = function(reinforcersArray){
  return {
    type: SET_REINFORCERS,
    reinforcersArray: reinforcersArray
  };
};

exports.SET_NAME = SET_NAME;
exports.setName = setName;

exports.SET_DATE = SET_DATE;
exports.setDate = setDate;

exports. SET_MOOD = SET_MOOD;
exports.setMood = setMood;

exports.SET_SERVICES = SET_SERVICES;
exports.setServices = setServices;

exports.SET_WORK = SET_WORK;
exports.setWork = setWork;

exports. SET_REINFORCERS = SET_REINFORCERS;
exports.setReinforcers = setReinforcers;

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

const SET_SERVICE = 'SET_SERVICE';
const setService = function(service){
  return {
    type: SET_SERVICE,
    service: service
  }
}

const SET_WORK = 'SET_WORK';
const setWork = function(work){
  return {
    type: SET_WORK,
    work: work
  };
};

const SET_REINFORCER = 'SET_REINFORCER';
const setReinforcer = function(reinforcer){
  return {
    type: SET_REINFORCER,
    reinforcer: reinforcer
  };
};

const REMOVE_REINFORCER = 'REMOVE_REINFORCER';
const removeReinforcer = function(reinforcerToRemove){
  return {
    type: REMOVE_REINFORCER,
    reinforcerToRemove: reinforcerToRemove
  };
};

exports.SET_NAME = SET_NAME;
exports.setName = setName;

exports.SET_DATE = SET_DATE;
exports.setDate = setDate;

exports.SET_MOOD = SET_MOOD;
exports.setMood = setMood;

exports.SET_SERVICE = SET_SERVICE;
exports.setService = setService;

exports.SET_WORK = SET_WORK;
exports.setWork = setWork;

exports.SET_REINFORCER = SET_REINFORCER;
exports.setReinforcer = setReinforcer;

exports.REMOVE_REINFORCER = REMOVE_REINFORCER;
exports.removeReinforcer = removeReinforcer;

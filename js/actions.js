//const fetch = require('isomorphic-fetch');
const axios = require('axios');
const url = 'https://numbersapi.p.mashape.com/';
const type = 'date';

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

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const toggleDrawer = function(isOpen){
  return {
    type: TOGGLE_DRAWER,
    isOpen: isOpen
  };
};

const FETCH_DATE_FACT_SUCCESS = 'FETCH_DATE_FACT_SUCCESS';
const fetchDateFactSuccess = function( dateForFact){
  return {
    type: FETCH_DATE_FACT_SUCCESS,
    dateForFact: dateForFact
  };
};

const FETCH_DATE_FACT_ERROR = 'FETCH_DATE_FACT_ERROR';
const fetchDateFactError = function(dateForFact, error){
  return {
    type: FETCH_DATE_FACT_ERROR,
    error: error,
    dateForFact: dateForFact
  };
};

// var fetchDateFact = function(dateForFact){
//   var fullDate = new Date(dateForFact);
//   var date = fullDate.getDate();
//   var month = fullDate.getMonth();
//   return function(dispatch){
//     return fetch(url + month + '/' + date + '/' + type + '?json').then(function(response){
//       if (response.state < 200 || response.status >= 300){
//         var error = new Error(response.statusText)
//         error.response = response
//         throw error;
//       }
//       return response;
//     })
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(data){
//       console.log(data, 'from fetchDateFact action');
//       var dateFact = data.text;
//       return dispatch(fetchDateFactSuccess(dateFact));
//     })
//     .catch(function(error){
//       return dispatch(fetchDateFactError(dateForFact, error));
//     });
//   };
// };

var fetchDateFact = function(dateForFact){
  var fullDate = new Date(dateForFact);
  var date = fullDate.getDate();
  var month = fullDate.getMonth() + 1;
  return function(dispatch){
    return axios({
      method: 'GET',
      url: url + month + '/' + date + '/' + type + '?json',
      //responseType: 'json',
      headers: {
        "X-Mashape-Authorization": "a4rloA0evJmshxsK2DJN9DhfCJWtp1yeykrjsnUpv67qQqd1l7"
      }
    })
    .then(function(response){
      if (response.state < 200 || response.status >= 300){
        console.log(response, 'response');
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response;
    })
    .then(function(data){
      console.log(data, data.data.text, 'from fetchDateFact action');

      var dateForFact = data.data.text;
      return dispatch(fetchDateFactSuccess(dateForFact));
    })
    .catch(function(error){
      console.log(error, dateForFact, 'from action error');
      return dispatch(fetchDateFactError(dateForFact, error));
    });
  }
}

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

exports.TOGGLE_DRAWER = TOGGLE_DRAWER;
exports.toggleDrawer = toggleDrawer;

// exports.OPEN_DRAWER = OPEN_DRAWER;
// exports.openDrawer = openDrawer;
//
// exports.CLOSE_DRAWER = CLOSE_DRAWER;
// exports.closeDrawer = closeDrawer;

exports.FETCH_DATE_FACT_SUCCESS = FETCH_DATE_FACT_SUCCESS;
exports.fetchDateFactSuccess = fetchDateFactSuccess;

exports.FETCH_DATE_FACT_ERROR = FETCH_DATE_FACT_ERROR;
exports.fetchDateFactError = fetchDateFactError;

exports.fetchDateFact = fetchDateFact;

// .then(function(response){
//   console.log(response, 'response.json');
//   return response.json();
// })

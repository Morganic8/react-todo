var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
//Destructuring ES6
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

//takes a function as an arg
//if user exist they are authenticated
firebase.auth().onAuthStateChanged( (user)=> {
  if(user) {
    store.dispatch(actions.login(user.uid));
    //Async action that fetches data from firebase and updates the app
    //just grab the users todos, not everyone elses
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  };
});

//Import the playground Firebase code, we are not exporting any code thus we don't require anything
//We are using the path instead, which essentially calls the js file like a function ()

//test out firebase below
//import './../playground/firebase/index.js';



//Load Foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')




ReactDOM.render(
  //Router expects one prop
  <Provider store={store}>
    {/* bring in all of the routes  */}
    {router}
  </Provider>,
  document.getElementById('app')

);

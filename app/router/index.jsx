import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

//Middleware to make certain pages private or you need to be logged in to view
var requireLogin = (nextState, replace, next) => {
  //if no one is logged in, take them back to the start of the app
  if (!firebase.auth().currentUser) {
    //replace URL with whatever you want
      replace('/');
  }
  //Tell middleware that we are done
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  //if no one is logged in, take them back to the start of the app
  if (firebase.auth().currentUser) {
    //replace URL with whatever you want
      replace('/todos');
  }
  //Tell middleware that we are done
  next();
};

export default (
  <Router history={hashHistory}>
     <Route path="/">
     {/* onEnter is a middleware property above to make pages private */}
         <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
         <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
     </Route>
 </Router>
);

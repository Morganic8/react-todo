var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');



//Destructuring ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import TodoApp from 'TodoApp';
import Login from 'Login';


//Import the playground Firebase code, we are not exporting any code thus we don't require anything
//We are using the path instead, which essentially calls the js file like a function ()

//test out firebase below
//import './../playground/firebase/index.js';

//Async action that fetches data from firebase and updates the app
store.dispatch(actions.startAddTodos());

//Load Foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  //Router expects one prop
  //{hashHistory}, {Main}, {Weather} are JSX expressions
  //{Weather} is index you must you IndexLink to remove auto 'active class' check Nav.jsx
  <Provider store={store}>
      <Router history={hashHistory}>
         <Route path="/">
             <Route path="todos" component={TodoApp}/>
             <IndexRoute component={Login} />
         </Route>
     </Router>
  </Provider>,
  document.getElementById('app')

);

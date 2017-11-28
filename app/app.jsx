var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');


//Destructuring ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})


store.dispatch(actions.addTodo('Clean the Yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
//Load Foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  //Router expects one prop
  //{hashHistory}, {Main}, {Weather} are JSX expressions
  //{Weather} is index you must you IndexLink to remove auto 'active class' check Nav.jsx
  <TodoApp/>,
  document.getElementById('app')

);

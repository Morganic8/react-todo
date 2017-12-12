var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp');


//Destructuring ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

//Load Foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  //Router expects one prop
  //{hashHistory}, {Main}, {Weather} are JSX expressions
  //{Weather} is index you must you IndexLink to remove auto 'active class' check Nav.jsx
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')

);

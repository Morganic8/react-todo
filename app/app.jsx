var React = require('react');
var ReactDOM = require('react-dom');


//Destructuring ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  //Router expects one prop
  //{hashHistory}, {Main}, {Weather} are JSX expressions
  //{Weather} is index you must you IndexLink to remove auto 'active class' check Nav.jsx
  <p>BoilerPlate 3 Project</p>,
  document.getElementById('app')

);

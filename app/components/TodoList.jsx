var React = require('react');
//allows access to the store and its children
var {connect} = require('react-redux')

import Todo from 'Todo'
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
render: function(){
  var {todos, showCompleted, searchText} = this.props;
  var renderTodos = () => {
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    if(filteredTodos.length === 0) {
      return (
        <p className="container__message">Nothing to do!</p>
      )
    }
    //Renders each element item in an array
    return filteredTodos.map( (todo) => {
      return (
        //Spread Operator "{...todo}", spread out props, makes object accesible to Todo.jsx
        //Key lets you iterate over array of objects with special unique identifier aka "id"
        <Todo key={todo.id} {...todo}/>
      )
    })
  };
    return (
    <div>
      {renderTodos()}
    </div>
  )
}
});

//Todolist can now request data that it would like to render itself
//it now connects store to individual component
export default connect(
  (state) => {
    return state;
  }
)(TodoList);

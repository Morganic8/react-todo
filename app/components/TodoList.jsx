var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
render: function(){
  var {todos} = this.props;
  var renderTodos = () => {
    //Renders each element item in an array
    return todos.map( (todo) => {
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

module.exports = TodoList;
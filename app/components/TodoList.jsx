var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
render: function(){
  var {todos} = this.props;
  var renderTodos = () => {
    if(todos.length === 0) {
      return (
        <p className="container__message">Nothing to do!</p>
      )
    }
    //Renders each element item in an array
    return todos.map( (todo) => {
      return (
        //Spread Operator "{...todo}", spread out props, makes object accesible to Todo.jsx
        //Key lets you iterate over array of objects with special unique identifier aka "id"
        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

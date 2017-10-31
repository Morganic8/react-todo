var React = require('react');

var AddTodo = React.createClass({
  onTodoSubmit: function(e){
    e.preventDefault();

    var strTodo = this.refs.TodoText.value;

    if( strTodo.length > 0){
      this.refs.TodoText.value = '';
      this.props.onSetTodo(strTodo);
    } else {
      this.refs.TodoText.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onTodoSubmit}>
          <input type='text' ref="TodoText" placeholder="What do you you need to do?"></input>
          <button className="button hollow expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;

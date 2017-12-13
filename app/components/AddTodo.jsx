var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onTodoSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var strTodo = this.refs.TodoText.value;

    if( strTodo.length > 0){
      this.refs.TodoText.value = '';
      dispatch(actions.startAddTodo(strTodo));
    } else {
      this.refs.TodoText.focus();
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.onTodoSubmit}>
          <input type='text' ref="TodoText" placeholder="What do you you need to do?"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

//gives you access to the store
export default connect()(AddTodo);

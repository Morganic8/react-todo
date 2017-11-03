var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    //check if value is array if not do nothing
    if($.isArray(todos)){
      //store array to local storage
      //JSON.str... converts Array or Object to string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    //store setItem variable
      var stringTodos = localStorage.getItem('todos');
      var todos = [];

      //check value is array
      try {
        todos = JSON.parse(stringTodos);
      } catch (e) {

      }
      //return array if exists
      return $.isArray(todos) ? todos : [];

  },
  filterTodos: function(todos, showCompleted, searchText) {
      var filteredTodos = todos;

      //Filter by showCompleted
      filteredTodos = filteredTodos.filter( (todo) => {
        return !todo.completed || showCompleted;
      });
      //Filter by searchText
      filteredTodos = filteredTodos.filter( (todo) => {
        var text = todo.text.toLowerCase();

        return searchText.length === 0 || text.indexOf(searchText) > -1;
      });

      //Sort todos with non-completed first
      filteredTodos.sort( (a, b) => {
        //return 1 = return b
        //return -1 = return a
        if(!a.completed && b.completed) {
          return -1;
        } else if (a.completed && !b.completed) {
          return 1;
        } else {
          return 0;
        }
      });

      return filteredTodos;
  }
};

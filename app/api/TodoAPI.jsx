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

  }
};

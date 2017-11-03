var expect = require('expect');


var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  //Mocha key term
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
});


describe('setTodos', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should set valid todos array', () => {
    var todos = [{
      id: 23,
      text: 'test all files',
      completed: false
    }];

    //call array above
    TodoAPI.setTodos(todos);

    var actualTodos = JSON.parse(localStorage.getItem('todos'));

    //toEqual Working with objects or arrays just check values a = [] === b = []
    //toBe works from memory a = [] != b = []
    expect(actualTodos).toEqual(todos);
  });


  it('should not set invalid todos array', () => {
    var badTodos = {a: 'b'};

    TodoAPI.setTodos(badTodos);

    expect(localStorage.getItem('todos')).toBe(null);
  });
});


describe('getTodos', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should return empty array for bad localStorage data', () => {
    var actualTodos = TodoAPI.getTodos();
    expect(actualTodos).toEqual([]);
  });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
});

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', ()=> {
  it('should exist', ()=> {
    expect(TodoList).toExist();
  });

  it('should render todo component for each todo item', ()=> {
    var todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Check Mail'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    //Checks how many items in the components
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    //checks how many components rendered against how many items in the array
    expect(todosComponents.length).toBe(todos.length);
  })
});

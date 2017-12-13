var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

import * as actions from 'actions';

describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', ()=> {
      var todoText = 'Hello';
      var action = actions.startAddTodo(todoText);

      var spy = expect.createSpy();
      //pass spy into prop
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      //find elements in DOM
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.TodoText.value = todoText;

      //simulate form Submit
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action);

    });

    it('should not dispatch ADD_TODO when invalid todo text', ()=> {
      var todoText = '';
      var spy = expect.createSpy();
      //pass spy into prop
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      //find elements in DOM
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.TodoText.value = todoText;

      //simulate form Submit
          TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();

    });





});

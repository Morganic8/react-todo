var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onSetTodo if valid string', ()=> {
      var todoText = 'Hello';
      var spy = expect.createSpy();
      //pass spy into prop
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onSetTodo={spy}/>);
      //find elements in DOM
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.TodoText.value = todoText;

      //simulate form Submit
          TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);

    });

    it('should not call onSetTodo if valid string', ()=> {
      var todoText = '';
      var spy = expect.createSpy();
      //pass spy into prop
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onSetTodo={spy}/>);
      //find elements in DOM
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.TodoText.value = todoText;

      //simulate form Submit
          TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();

    });





});

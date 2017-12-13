var expect = require('expect');

var actions = require('actions');


//ES6 importing is like require
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

//create a mock store
//Create a mock store per each test
//add array of middleware
var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };

      var res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'anything we like',
          completed: false,
          createdAt: 0
        }
      };

      var res = actions.addTodo(action.todo);

      expect(res).toEqual(action);
  });


  it('should create todo and dispatch ADD_TODO', (done) => {
    //create mock store
    const store = createMockStore({});
    const todoText = 'My todo item';


    store.dispatch(actions.startAddTodo(todoText)).then( () => {
      //get all actions that were fired
      const actions = store.getActions();

      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      //Make karma wait till done is called
      done();
    }).catch(done);

  });

  it('should generate addTodos actions object', ()=> {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000

    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    }

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  })


  it('should toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'

    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action)
  });


  it('should toggle todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1

    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);


  });
});

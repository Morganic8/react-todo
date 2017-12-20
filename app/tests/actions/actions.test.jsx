var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
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
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed:false}
    };
    var updates = {};

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);

  });

  it('should generate login action object', ()=> {
      const action = {
        type: 'LOGIN',
        uid: '123abc'
      }

      const res = actions.login(action.uid);

      expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
     const action = {
       type: 'LOGOUT'
     }

     const res = actions.logout();

     expect(res).toEqual(action);

     
  });


  describe('Tests with Firebase Todos', () => {
    var testTodoRef;

    //Mocha code that can run this code before each test
    beforeEach( (done)=> {

      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then( ()=> {
        //generate todo ref from firebase
          testTodoRef = firebaseRef.child('todos').push();

          testTodoRef.set({
            text: 'Somthing to do',
            completed: false,
            completedAt: 873479
            //single line response does not need curly braces
          })
      })
      .then( ()=> done())
      .catch(done)
    });

    //Mocha code that can run this code after each test
    afterEach( (done) => {
      testTodoRef.remove().then( ()=> done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});

      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then( ()=> {
        //mock store lib func getActions
        const mockActions = store.getActions();

        //toInlcude more flexible with data than toEqual
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist()
      }, done());
    });

    it('should verify dispatch actions for addTodos', (done) => {
      //Create a new store to test data not real data
      const store = createMockStore({});

      //grab the action you want to test
      const action = actions.addTodos();

      //dispatch the action and utilize the promise to expect testing
      store.dispatch(action).then( ()=> {
        //gets all of the actions in an array from when the store was created
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);


        expect(mockActions[0].todos[0].text).toEqual({
          text: 'Somthing to do'
        });
      }, done())
    });
  });
});

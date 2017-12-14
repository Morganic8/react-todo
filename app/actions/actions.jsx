import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};


export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

//communicate with Firebase async code
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null

          };
          //make ref to firebase todo
          var todoRef = firebaseRef.child('todos').push(todo)

          //update firebase and the promise will dispatch the action to add to the view
          return todoRef.then( ()=> {
              dispatch(addTodo({
                ...todo,
                id: todoRef.key
              }));
          }, (e)=> {
                console.log('Error in dispatching add to do', e);
          });

    }
  };

//Toggle Show Completed
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'

  }
};
//toggle todo

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
};


export var startToggleTodo = (id, completed) => {
  //async action, dispatch utilizing thunk so it can return a function
  return (dispatch, getState) => {
    //ES6 template strings ticks to the left, and inject
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    //chain on for testing
    //updates firebase
    return todoRef.update(updates).then(() => {
      //updates the store and rerenders what the user sees
      dispatch(updateTodo(id, updates));
    });
  }
}

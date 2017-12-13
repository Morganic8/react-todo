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

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

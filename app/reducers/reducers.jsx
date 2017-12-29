var uuid = require('node-uuid');

var moment = require('moment');


export var searchTextReducer = ( state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
    return state;
  };
}


export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
    return state;

  };
};


export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        action.todo
      ];
      //add case for TOggle_todo match id, modify !completed update completedAt
      case "UPDATE_TODO":
        return state.map( (todo) => {
          if(todo.id === action.id) {
            return {
              ...todo,
              //multiple spread operators will override the previous ones, that's why update will work fine
              ...action.updates
            };
          } else {
            return todo;
          }
      });

      case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
      //Wipe data on logout
      case 'LOGOUT':
      return [];
    default:
    return state;

  }
};

//YOU NEED TO UPDATE THE STORE WHEN YOU ADD NEW REDUCERS
export var authReducer = (state = {}, action) => {

    switch(action.type) {
      case 'LOGIN':
        return {
        uid: action.uid
      }
        console.log('Login success?', action.type)
      case 'LOGOUT':
        return {};
        console.log('Logout success', action.type)
      default:
        return state;


    }
}

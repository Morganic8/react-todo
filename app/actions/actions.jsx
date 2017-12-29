import firebase, {firebaseRef, googleProvider} from 'app/firebase/index';
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

//how the data comes back from fb and how it should be stored in redux
//firebase returns objects, our app needs arrays
export var startAddTodos = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);

    //Fetch the data from firebase
    todosRef.once('value').then( (snapshot) => {
      //get the data
      var todos = snapshot.val() || {};

      //parse firebase object data into an array for redux to read
      var parseTodos = [];

      //convert todos to make parseTodos work with redux
      //just grab the id's for each ID in firebase
      Object.keys(todos).forEach( (todoId) => {
        //push the data from firebase to redux item parseTodos
          parseTodos.push({
            id: todoId,
            ...todos[todoId]
          });
      });

      // update the redux store
      dispatch(addTodos(parseTodos));

    });
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

          //get uid from firebase, getState is the redux function that will deliver the FB auth.uid
          var uid = getState().auth.uid;
          //make ref to firebase todo
          var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo)

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
    var uid = getState().auth.uid;
    //ES6 template strings ticks to the left, and inject
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};

export var startLogin = () => {

  return (dispatch, getState) => {

    //call firebase function to start auth
    //result variable holds a ton of info
    return firebase.auth().signInWithPopup(googleProvider).then( (result)=> {

    }, (e) => {

    });
  }
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export var startLogout = () => {

  return (dispatch, getState) => {
    //return below makes it available to testing
      return firebase.auth().signOut().then( () => {
        console.log('logged out');
      });
  }
};

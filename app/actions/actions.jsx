export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};


export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};


//Toggle Show Completed
export var showCompleted = () => {
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

//import the NPM install for firebase
import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAffiwNHcfDPBbtyavJuFIhQXHx0gxY6r0",
    authDomain: "atwood-todo-app.firebaseapp.com",
    databaseURL: "https://atwood-todo-app.firebaseio.com",
    projectId: "atwood-todo-app",
    storageBucket: "atwood-todo-app.appspot.com",
    messagingSenderId: "529359489961"
  };
  //call method
  firebase.initializeApp(config);

//This communicates to the firebase db object on what to change or set as defaults
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  appObj: {
    appName: 'Todos App',
    version: '1.0.1'
  },
  isRunning: true,
  user: {
    name: 'Morgan',
    age: 31
  },

  //STORING ARRAYS IN FIREBASE
  //123abc is the special id for each array item
  todos: {
    '123abc': {
      text: 'Film some vids'
    }
  }

});
//
// firebaseRef.update({
//   isRunning: false,
//   'appObj/appName' : 'Todo Application'
// })
//
// firebaseRef.child('appObj').update({
//   appName: 'Todo App'
// })


//*******************UPDATING FIREBASE*************




// Updating the ref db you must use multipath updates on objects
firebaseRef.update({
  'appObj/appName': 'Mo Todo',
  'user/name': 'Mo'
});


//for multiple objects you can either use the multiple updates above or you can use multiple child updates
//per object
firebaseRef.child('appObj').update({
  appName: 'More Todos'
});

firebaseRef.child('user').update({
  name: 'Morgy'
});

//Wipes all db info
// firebaseRef.remove();
// firebaseRef.child('appObj/appName').remove()
//

//Setting properties to null will remove data
// firebaseRef.update({
//   isRunning: null
// });

//trigger and listen once
//returns snapshot values of db
firebaseRef.once('value').then( (snapshot) => {
  console.log('got entire database', snapshot.val());
}, (e)=> {
  console.log('unable to fetch value', e)
});


//or just a child with the key
// firebaseRef.child('appObj').once('value').then( (snapshot) => {
//   console.log('got entire database', snapshot.key, snapshot.val());
// }, (e)=> {
//   console.log('unable to fetch value', e)
// });
//
// //listens for changes to the db
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got Value', snapshot.val());
// });

//turn off the listener for value, will not update below code
// firebaseRef.off();
//
//
// firebaseRef.update({isRunning: false});


//
// //change the value of a child value and listen for it
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('user ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'Mike'
// });



//********** CHILD EVENTS*********
//child_added
//child_changed
//child_removed





// //Make a new db prop
// var notesRef = firebaseRef.child('notes');
//
//
// //an event that fires to the console that a child got added
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child added', snapshot.key, snapshot.val())
// })
//
// //an event that fires to the console that a child got added
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child changed', snapshot.key, snapshot.val())
// })
//
// //an event that fires to the console that a child got added
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child removed', snapshot.key, snapshot.val())
// })
//
// //add array value
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// // grab the id
// console.log('Todo ID', newNoteRef.key)







// var todosRef = firebaseRef.child('todos');
//
// // print key and value to screen
// // Add 2 todos to array, push text prop only
// // call back fired twice
//
// todosRef.on('child_added', (snapshot) => {
//     console.log('Todo Child Added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Eat lunch'
// });
//
// todosRef.push({
//   text: 'play games'
// });




// WHERE TO PUT FIREBASE CODE

//React components should only worry about rendering themselves
//use dispatch actions or actions.jsx

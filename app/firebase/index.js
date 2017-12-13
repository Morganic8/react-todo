//import the NPM install for firebase
import firebase from 'firebase'

try {
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

} catch (e) {

}

//This communicates to the firebase db object on what to change or set as defaults
export var firebaseRef = firebase.database().ref();

export default firebase;

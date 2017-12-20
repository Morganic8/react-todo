//import the NPM install for firebase
import firebase from 'firebase'

try {
  // Initialize Firebase
    var config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID
    };
    //call method
    firebase.initializeApp(config);

} catch (e) {

}

//GITHUB Provider
export var githubProvider = new firebase.auth.GithubAuthProvider();


//This communicates to the firebase db object on what to change or set as defaults
export var firebaseRef = firebase.database().ref();

export default firebase;

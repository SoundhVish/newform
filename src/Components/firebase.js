import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwAwwBKkRiFSRR5M5GBTCZK7xEw_03qBc",
    authDomain: "propvrmini.firebaseapp.com",
    databaseURL: "https://propvrmini.firebaseio.com",
    projectId: "propvrmini",
    storageBucket: "propvrmini.appspot.com",
    messagingSenderId: "1051687570033",
    appId: "1:1051687570033:web:d66395ea3d5ac5fad669d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;
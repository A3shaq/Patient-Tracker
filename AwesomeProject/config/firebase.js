import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAMlwUvKNWcwEY6iotjjZ1ImPMaF3JVV08',
  authDomain: 'signup-e26fc.firebaseapp.com',
  databaseURL: 'https://signup-e26fc.firebaseio.com',
  projectId: 'signup-e26fc',
  storageBucket: 'signup-e26fc.appspot.com',
  messagingSenderId: '361155260114',
  appId: '1:361155260114:web:e5c86c9409b29c6dbc870b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('firebase', firebase);
const RegisterWithFirebase = (name, email, password) => {
  console.log('Register');

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((val) => {
      console.log('snap Firebase', val.user);
      let users = {
        name,
        email,
        password,
        uid: val.user.uid,
      };
      firebase
        .database()
        .ref()
        .child(`users/${users.uid}`)
        .set(users)
        .then((sucess) => console.log());
    });
};

export {firebase, RegisterWithFirebase};

import * as firebase from 'firebase';

const config = {
  apiKey           : "AIzaSyCDDiX2BgjgfpTtCC6QuWxZ7rDMqjkWeBc",
  authDomain       : "aggro-surf-1492129595773.firebaseapp.com",
  databaseURL      : "https://aggro-surf-1492129595773.firebaseio.com",
  projectId        : "aggro-surf-1492129595773",
  storageBucket    : "aggro-surf-1492129595773.appspot.com",
  messagingSenderId: "51405118693"
};

firebase.initializeApp(config);
export const database = firebase.database()
export const auth     = firebase.auth()


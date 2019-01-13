import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCA_m8I6yI8d-0eOWjg1O9l6AKRMfkSm8Y",
  authDomain: "comments-jonyreactjs.firebaseapp.com",
  databaseURL: "https://comments-jonyreactjs.firebaseio.com",
  projectId: "comments-jonyreactjs",
  storageBucket: "comments-jonyreactjs.appspot.com",
  messagingSenderId: "618758127557"
};
firebase.initializeApp(config);


export const database = firebase.database();
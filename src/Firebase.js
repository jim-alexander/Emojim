import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
 };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();

export { db };

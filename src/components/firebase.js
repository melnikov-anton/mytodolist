import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {
  firebase,
  firestore
};

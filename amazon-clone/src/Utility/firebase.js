import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';





const firebaseConfig = {
  apiKey: "AIzaSyCsC3qc1da7Y8fliveGR-wtdRMoxkgqVLE",
  authDomain: "clone-408b8.firebaseapp.com",
  projectId: "clone-408b8",
  storageBucket: "clone-408b8.appspot.com",
  messagingSenderId: "1001022768656",
  appId: "1:1001022768656:web:3877b093e883ffcef82c95"
};



const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();





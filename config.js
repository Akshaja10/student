
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAp1lnChbCvI26TACvh4JvQoa2Q9y26GYY",
  authDomain: "student-9280f.firebaseapp.com",
  databaseURL: "https://student-9280f-default-rtdb.firebaseio.com",
  projectId: "student-9280f",
  storageBucket: "student-9280f.appspot.com",
  messagingSenderId: "228167464501",
  appId: "1:228167464501:web:42909601c6128ec33ea37c"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
  
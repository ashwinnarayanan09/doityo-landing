// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYtJeewAy6JhfVfOjW_J7tCZ5-6Q4VktE",
  authDomain: "doityo-56f04.firebaseapp.com",
  databaseURL:
    "https://doityo-56f04-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "doityo-56f04",
  storageBucket: "doityo-56f04.appspot.com",
  messagingSenderId: "600750842362",
  appId: "1:600750842362:web:8660b1be6981e8067dc443",
  measurementId: "G-S6KWCFWG71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

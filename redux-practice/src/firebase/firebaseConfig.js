// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT-L_qqYsO9xNy36q2mvwRkYP0fN2MZrA",
  authDomain: "word-catching.firebaseapp.com",
  databaseURL: "https://word-catching-default-rtdb.firebaseio.com",
  projectId: "word-catching",
  storageBucket: "word-catching.appspot.com",
  messagingSenderId: "153305943165",
  appId: "1:153305943165:web:7c23008922dad9225b3514",
  measurementId: "G-9LQK79HNMN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

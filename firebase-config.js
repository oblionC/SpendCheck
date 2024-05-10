// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYZF9Bm6m-InUFUjJ-Jc-k9l2QN2ZS0yw",
  authDomain: "balancecheck-266c6.firebaseapp.com",
  databaseURL: "https://balancecheck-266c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "balancecheck-266c6",
  storageBucket: "balancecheck-266c6.appspot.com",
  messagingSenderId: "8108704919",
  appId: "1:8108704919:web:a40fdc4dec541c5c7155d2",
  measurementId: "G-J6MGS2L924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
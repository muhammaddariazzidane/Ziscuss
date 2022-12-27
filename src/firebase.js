// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91aQbY2z0yIJ1qShwFdaCBDW24tod-vg",
  authDomain: "ziscuss.firebaseapp.com",
  projectId: "ziscuss",
  storageBucket: "ziscuss.appspot.com",
  messagingSenderId: "460323563040",
  appId: "1:460323563040:web:a78bd50ba21af1986a3e45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUWPIPSzSXUxfYM4oEiRcQrvKySJDhlGY",
  authDomain: "gokul-d0f00.firebaseapp.com",
  projectId: "gokul-d0f00",
  storageBucket: "gokul-d0f00.firebasestorage.app",
  messagingSenderId: "979285510298",
  appId: "1:979285510298:web:be637f958533ee8125b723",
  measurementId: "G-WB7PWLCHD0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

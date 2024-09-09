// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvHJTPSBHFWMHBPMQT81IPETn8QIKWSM4",
  authDomain: "ecommerce-de8dd.firebaseapp.com",
  projectId: "ecommerce-de8dd",
  storageBucket: "ecommerce-de8dd.appspot.com",
  messagingSenderId: "722131481049",
  appId: "1:722131481049:web:5e15dc8510a55f51ee69c8",
  measurementId: "G-1YRCG0EMMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

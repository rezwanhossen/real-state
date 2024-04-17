// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSicgJ0q3xOgTNRMu3U4iC7LJbURiUqVg",
  authDomain: "real-estate-assigment-9.firebaseapp.com",
  projectId: "real-estate-assigment-9",
  storageBucket: "real-estate-assigment-9.appspot.com",
  messagingSenderId: "188113846017",
  appId: "1:188113846017:web:be52683a1002cbe43d6500",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;

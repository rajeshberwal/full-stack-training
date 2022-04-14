// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDcIzZT43A4ekD1vEL60m9F4ItnYH5r7Pc",
  authDomain: "ischool-react-app.firebaseapp.com",
  projectId: "ischool-react-app",
  storageBucket: "ischool-react-app.appspot.com",
  messagingSenderId: "682341056807",
  appId: "1:682341056807:web:3b66c5c0f923d17374a902"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
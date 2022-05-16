// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9qqPEpydXUYFIZ9NBXVVavXvNQ0w7nE",
  authDomain: "bangla-boi-2bb42.firebaseapp.com",
  projectId: "bangla-boi-2bb42",
  storageBucket: "bangla-boi-2bb42.appspot.com",
  messagingSenderId: "225222792143",
  appId: "1:225222792143:web:6085658ef06f4d73b678ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
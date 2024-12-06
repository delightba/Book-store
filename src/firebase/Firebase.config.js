// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn57XIBRfdHziJQGUZ4DVSAGZina7oe5c",
  authDomain: "bookstore-83418.firebaseapp.com",
  projectId: "bookstore-83418",
  storageBucket: "bookstore-83418.appspot.com",
  messagingSenderId: "816327310327",
  appId: "1:816327310327:web:c75e4875d6ff31ec4dccf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
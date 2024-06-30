// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1W7hBrjbbza_aMVi1aWrsnumQacUZhQ4",
  authDomain: "mern-book-inventory-30a51.firebaseapp.com",
  projectId: "mern-book-inventory-30a51",
  storageBucket: "mern-book-inventory-30a51.appspot.com",
  messagingSenderId: "141925236650",
  appId: "1:141925236650:web:546c6faa7ab0cc2d26f5d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
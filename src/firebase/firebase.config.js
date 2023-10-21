// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7NmExsTftjBJsU0pCZhoIKGAifoxoZ8c",
  authDomain: "dragon-news-efb3a.firebaseapp.com",
  projectId: "dragon-news-efb3a",
  storageBucket: "dragon-news-efb3a.appspot.com",
  messagingSenderId: "887737696567",
  appId: "1:887737696567:web:d202123e17064e1dc71ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
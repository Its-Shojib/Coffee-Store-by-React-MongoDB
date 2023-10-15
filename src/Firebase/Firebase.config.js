// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqB8uSiSDpxEXhRyT20efmqIAEup-v4wk",
  authDomain: "coffee-store-2421a.firebaseapp.com",
  projectId: "coffee-store-2421a",
  storageBucket: "coffee-store-2421a.appspot.com",
  messagingSenderId: "761708893971",
  appId: "1:761708893971:web:8b5040cffe18db1fbeece6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
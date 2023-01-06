// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJIWoIEVtlo1D4NnfD-O2XfE1KnpzfQ74",
  authDomain: "mydemi-b1cfe.firebaseapp.com",
  projectId: "mydemi-b1cfe",
  storageBucket: "mydemi-b1cfe.appspot.com",
  messagingSenderId: "662240594021",
  appId: "1:662240594021:web:393eacadedab163a069e8c",
  measurementId: "G-BXTP9FSRBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWjfsDQF9jJU_h2n8EGXW_JiwQKuNdSY0",
  authDomain: "contact-67986.firebaseapp.com",
  projectId: "contact-67986",
  storageBucket: "contact-67986.appspot.com",
  messagingSenderId: "35898919486",
  appId: "1:35898919486:web:7af6a64bf6d6b3d124df6f",
  measurementId: "G-FDLV2Y1ZNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

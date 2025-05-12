// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBROR2akOO4IY8RLHyTTj_ETAztC9A2svg",
  authDomain: "agro-nova.firebaseapp.com",
  projectId: "agro-nova",
  storageBucket: "agro-nova.firebasestorage.app",
  messagingSenderId: "695784753140",
  appId: "1:695784753140:web:590734c80e5d541bd89ba1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

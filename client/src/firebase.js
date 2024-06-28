// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEAPIKEY,
  authDomain: "mernblog-d118d.firebaseapp.com",
  projectId: "mernblog-d118d",
  storageBucket: "mernblog-d118d.appspot.com",
  messagingSenderId: "599744048756",
  appId: "1:599744048756:web:62ac2f9c7b529f5fb72b21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
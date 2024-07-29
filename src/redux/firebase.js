// Import the functions you need from the SDKs you needimport { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpcjgGH-wfVez9fPRH98_3OBSgLygUF08",
  authDomain: "organic-justice-426007-n8.firebaseapp.com",
  projectId: "organic-justice-426007-n8",
  storageBucket: "organic-justice-426007-n8.appspot.com",
  messagingSenderId: "1097422210960",
  appId: "1:1097422210960:web:1d74aaf2f1d2f0ddc51515",
  measurementId: "G-6NFF36VE56"
};

// Initialize Firebaseconst 
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
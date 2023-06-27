// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQHyopHFT-emm2w4mgAgYpMi0v_LuV3Y",
  authDomain: "react-portfolio-aashis.firebaseapp.com",
  projectId: "react-portfolio-aashis",
  storageBucket: "react-portfolio-aashis.appspot.com",
  messagingSenderId: "711134540716",
  appId: "1:711134540716:web:ca0f605acf24a2edcb4009"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
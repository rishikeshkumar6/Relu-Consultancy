import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCNuUxp9nia5Owje-MK86JN7eU_B36Kn3c",
  authDomain: "authentication-system-a5286.firebaseapp.com",
  projectId: "authentication-system-a5286",
  storageBucket: "authentication-system-a5286.appspot.com",
  messagingSenderId: "855153230568",
  appId: "1:855153230568:web:b3f7bc867d362cb6fb3f5d",
  measurementId: "G-8Z6WM3C4DR"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth()

export {app,auth};
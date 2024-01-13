// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBFbQhbtdMT-LMt0ypi4t8QfNx0UJOb4xg",
  authDomain: "clone-e85a4.firebaseapp.com",
  projectId: "clone-e85a4",
  storageBucket: "clone-e85a4.appspot.com",
  messagingSenderId: "228703025737",
  appId: "1:228703025737:web:8d5b72d76f694b33fc1d98",
  measurementId: "G-V8VE43W0M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const provider=new GoogleAuthProvider();

export default app;
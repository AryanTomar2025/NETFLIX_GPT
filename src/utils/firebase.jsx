import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj1_3ViBWTQqfbBJJLd_IAoh9CENefaxg",
  authDomain: "netflixgpt-c3885.firebaseapp.com",
  projectId: "netflixgpt-c3885",
  storageBucket: "netflixgpt-c3885.appspot.com",
  messagingSenderId: "432516667560",
  appId: "1:432516667560:web:578064ebf285d0efa90a9d",
  measurementId: "G-F5D1RSY438",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

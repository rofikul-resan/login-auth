// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYa4Aj9hyisWQuzJu946IECEjliHnPKc0",
    authDomain: "login-practice-private.firebaseapp.com",
    projectId: "login-practice-private",
    storageBucket: "login-practice-private.appspot.com",
    messagingSenderId: "891152187055",
    appId: "1:891152187055:web:b2b80d70c0d6ca02c71e5a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
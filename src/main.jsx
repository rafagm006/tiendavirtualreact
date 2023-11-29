import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCglbylXKrqjbd57K7iPDrfqcwPCL3ZRoE",
  authDomain: "tiendavirtual-97837.firebaseapp.com",
  projectId: "tiendavirtual-97837",
  storageBucket: "tiendavirtual-97837.appspot.com",
  messagingSenderId: "378573969403",
  appId: "1:378573969403:web:4c15e618951bebc8715d5e",
  measurementId: "G-N8CJTKXL0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

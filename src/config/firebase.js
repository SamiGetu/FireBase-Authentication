// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8ucK0nfd6zZJNU_LV-GApvo0Ch4df3hw",
  authDomain: "login-auth-e01f1.firebaseapp.com",
  projectId: "login-auth-e01f1",
  storageBucket: "login-auth-e01f1.appspot.com",
  messagingSenderId: "418517005646",
  appId: "1:418517005646:web:a5d43251ec7eed147e5a1f",
  measurementId: "G-Z62TGF1EJZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

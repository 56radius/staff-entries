// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmX3skdHt1YgAaV6mcRVyJ5PD-8XCVCGQ",
  authDomain: "mtu-astaff-entry.firebaseapp.com",
  projectId: "mtu-astaff-entry",
  storageBucket: "mtu-astaff-entry.appspot.com",
  messagingSenderId: "624441345035",
  appId: "1:624441345035:web:992a3c38dddd37c64d330e",
  measurementId: "G-7F9WBV4PX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authConfig = getAuth(app);
export default app;

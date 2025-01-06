// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAEJSB5QJl_0MEr13gjLzBNYxdXuUliSk",
  authDomain: "ecommerce-e038c.firebaseapp.com",
  projectId: "ecommerce-e038c",
  storageBucket: "ecommerce-e038c.firebasestorage.app",
  messagingSenderId: "841829729642",
  appId: "1:841829729642:web:ecd6b4d97b2796617cd113",
  measurementId: "G-T9C3WQSSP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

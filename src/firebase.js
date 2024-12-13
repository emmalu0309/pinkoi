import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDLm1eNBZq_gcsYEIqLtu5hOY2CWi1Zx0",
  authDomain: "sign-in-1121b.firebaseapp.com",
  projectId: "sign-in-1121b",
  storageBucket: "sign-in-1121b.firebasestorage.app",
  messagingSenderId: "265083499036",
  appId: "1:265083499036:web:5743bdb690d88278ffe5d9",
  measurementId: "G-13PZYZ23HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
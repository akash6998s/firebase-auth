import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDv6_coDaz40Ixk7KEQ6IF8tlJ9MxWF_9I",
  authDomain: "auth-1-f4792.firebaseapp.com",
  projectId: "auth-1-f4792",
  storageBucket: "auth-1-f4792.appspot.com",
  messagingSenderId: "717157202800",
  appId: "1:717157202800:web:f03daeb2e9e9f9e5386db5",
  measurementId: "G-0LD1R6FTQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

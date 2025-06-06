
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_GMkTyMO5C-vver8oMOG83PA2xYW0O8M",
  authDomain: "nedlo-st.firebaseapp.com",
  projectId: "nedlo-st",
  storageBucket: "nedlo-st.firebasestorage.app",
  messagingSenderId: "518658480638",
  appId: "1:518658480638:web:f470f8c21b1ea9e5e588af",
  measurementId: "G-54Z1TG09MP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

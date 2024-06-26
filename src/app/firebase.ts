// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBYyApbL49gYmS_gUGyH9wZ0_4I44nryJA",
  authDomain: "netflix-clone-23bb4.firebaseapp.com",
  projectId: "netflix-clone-23bb4",
  storageBucket: "netflix-clone-23bb4.appspot.com",
  messagingSenderId: "201429566672",
  appId: "1:201429566672:web:271bb543ced89c0bff4ad5",
  measurementId: "G-VPMTK71GDS"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== 'undefined') {
  // Check if cookies are enabled
  if (navigator.cookieEnabled) {
    analytics = getAnalytics(app);
  } else {
    console.warn("Cookies are not enabled. Analytics will not be initialized.");
  }
}

const auth = getAuth(app);
const db = getFirestore(app);

// Signup
async function signup(name: string, email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
  } catch (error: any) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
}

async function login(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
}

async function logout() {
  signOut(auth);
}

export { auth, db, logout, login, signup };

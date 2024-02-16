import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjb1idqqF43PSl60LZBLRnba8O1H5sbRI",
  authDomain: "metabox-43ea7.firebaseapp.com",
  projectId: "metabox-43ea7",
  storageBucket: "metabox-43ea7.appspot.com",
  messagingSenderId: "282117292609",
  appId: "1:282117292609:web:dfaef68762970b973ebcc0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const providerGoogle = new GoogleAuthProvider();
export const providerApple = new OAuthProvider("apple.com");

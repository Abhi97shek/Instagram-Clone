
import { initializeApp,getApp,getApps } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvM6vMGpjixoU5M-nL03UdtXREWVPSzdY",
  authDomain: "insta-clone-e9d2f.firebaseapp.com",
  projectId: "insta-clone-e9d2f",
  storageBucket: "insta-clone-e9d2f.appspot.com",
  messagingSenderId: "945677547390",
  appId: "1:945677547390:web:75e37753511020e886652f"
};



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app,db,storage };
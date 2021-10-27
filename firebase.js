
import { initializeApp,getApp,getApps } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBHiirlMnSVLUr_vlb-rDV9FjI94Sfsl-Q",
  authDomain: "instagram-clone-e564d.firebaseapp.com",
  projectId: "instagram-clone-e564d",
  storageBucket: "instagram-clone-e564d.appspot.com",
  messagingSenderId: "973817795371",
  appId: "1:973817795371:web:81d3e796bd7990d6112b6e"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app,db,storage};
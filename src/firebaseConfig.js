import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACJGrLVSPGNBBfA84OPXfGqkWD-lNNqZw",
  authDomain: "zfunds-assignment.firebaseapp.com",
  projectId: "zfunds-assignment",
  storageBucket: "zfunds-assignment.appspot.com",
  messagingSenderId: "730876736297",
  appId: "1:730876736297:web:588d0c257758fb33ffbd38",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);

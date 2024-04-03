import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCZ9RgGg009-7kioJpNJXf-dBjvUpEsL8A",
	authDomain: "shake-4-cake-18caf.firebaseapp.com",
	projectId: "shake-4-cake-18caf",
	storageBucket: "shake-4-cake-18caf.appspot.com",
	messagingSenderId: "9598125498",
	appId: "1:9598125498:web:88bff2858ae3c339f98983",
	measurementId: "G-VL8411SJ9W"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

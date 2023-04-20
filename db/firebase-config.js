import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC20pc883_KOQ5lrWDvB6jZvwATtu1bV8o",
  authDomain: "ecommersreact.firebaseapp.com",
  projectId: "ecommersreact",
  storageBucket: "ecommersreact.appspot.com",
  messagingSenderId: "761347628493",
  appId: "1:761347628493:web:94a719fd04cca4e6957884",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//replace this with config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


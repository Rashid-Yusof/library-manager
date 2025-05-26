import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABlYBQN_WzzD4LXkFYCIOtqmy9TBl-u2E",
  authDomain: "library-management-app-93a11.firebaseapp.com",
  projectId: "library-management-app-93a11",
  storageBucket: "library-management-app-93a11.firebasestorage.app",
  messagingSenderId: "87539197575",
  appId: "1:87539197575:web:9908ecba2ff6f167d77a22"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


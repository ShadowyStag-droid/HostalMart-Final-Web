import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const config = {
  apiKey: "AIzaSyA7VBGyeLd--BhdRcL4IGavTI_Yn2BVUQc",
  authDomain: "hostel-mart-5d5f2.firebaseapp.com",
  projectId: "hostel-mart-5d5f2",
  storageBucket: "hostel-mart-5d5f2.appspot.com",
  messagingSenderId: "310265749581",
  appId: "1:310265749581:web:36f5ba9798b58a726f7c04"
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);



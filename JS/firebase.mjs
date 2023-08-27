import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyBA9_3Y0jx8TgP-Iaq92ZUWY2az669tUU4",
  authDomain: "hackathone2-92be7.firebaseapp.com",
  projectId: "hackathone2-92be7",
  storageBucket: "hackathone2-92be7.appspot.com",
  messagingSenderId: "160032294130",
  appId: "1:160032294130:web:766fa9d777b0e3fc5ebc6b",
  measurementId: "G-HC2ZCWRKV0"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export {app,auth,db,storage};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyBqeEsz-OOPdLh-6QVFixYq_eOLVey_-Bs",
  authDomain: "shafaq-ad46c.firebaseapp.com",
  databaseURL: "https://shafaq-ad46c-default-rtdb.firebaseio.com",
  projectId: "shafaq-ad46c",
  storageBucket: "shafaq-ad46c.appspot.com",
  messagingSenderId: "786582256482",
  appId: "1:786582256482:web:8b6126b016345f39680a3b",
  measurementId: "G-VS4V81MM3Y"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export {app,auth,db,storage};
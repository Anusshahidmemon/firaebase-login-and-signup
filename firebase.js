
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCfUYIOcaG_X4ExEUSjnWMClvNeZklTAG0",
   authDomain: "logion-and-signup.firebaseapp.com",
   projectId: "logion-and-signup",
   storageBucket: "logion-and-signup.appspot.com",
   messagingSenderId: "21213861135",
   appId: "1:21213861135:web:4793fb429b3b7a8b059a7a"
 };

 
 const app = initializeApp(firebaseConfig);
 const auth =getAuth(app)
 export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail}
import { auth,signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail } from "../firebase.js";
let email= document.getElementById("email")
let password= document.getElementById("password")
var forget =document.getElementById("forget")

var login =document.getElementById("btn")
document.addEventListener("DOMContentLoaded",function(){
    forget.addEventListener("click",function () {
        sendPasswordResetEmail(auth, email.value)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
    })
    login.addEventListener("click",function(){
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
     
        });
        
    })
})
onAuthStateChanged(auth, (user) => {
    if (user) {
    
  window.location.href="../Dashboard/dashboard.html"
    }});
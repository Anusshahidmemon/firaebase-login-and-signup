import { auth,createUserWithEmailAndPassword,onAuthStateChanged } from "../firebase.js";
let email= document.getElementById("email")
let password= document.getElementById("password")
var sign =document.getElementById("add")
document.addEventListener("DOMContentLoaded",function(){
    sign.addEventListener("click",function(){
        console.log(email.value, password.value);
        
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        
         Toastify({

          text: "user",
          
          duration: 3000
          
          }).showToast();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage);
          Toastify({

            text: `${errorMessage}`,
            
            duration: 3000
            
            }).showToast();
          
          
        });
        
    })
})



onAuthStateChanged(auth, (user) => {
  if (user) {
  
window.location.href="./login/login.html"
  }});
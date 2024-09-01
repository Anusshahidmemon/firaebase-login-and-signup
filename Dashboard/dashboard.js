import { auth,signOut,onAuthStateChanged } from "../firebase.js";
var button=document.getElementById("btn")
document.addEventListener("DOMContentLoaded",function(){
button.addEventListener("click",function(){

signOut(auth).then(() => {

}).catch((error) => {
  // An error happened.
});
})
})
onAuthStateChanged(auth, (user) => {
    if (!user) {
    
  window.location.href="../login/login.html"
    }});
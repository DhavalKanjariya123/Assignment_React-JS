
import React from "react";
// import { useNavigate } from 'react-router-dom';

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var z = document.forms["myFormdate"]["date"].value;
  var w = document.forms["myFormtime"]["time"].value;
  var y = document.forms["myFormnum"]["num"].value;


  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
  else if (z == "" || y == null) {
    alert("Date must be filled out");
    return false;
  }
  else if (w == "" || y == null) {
    alert("Time must be filled out");
    return false;
  }
  else if (y == "" || y == null) {
    alert("Number must be filled out");
    return false;
  }
  else {
    alert("Thank you for booking a table at our hotel. We look forward to welcoming you! Please note that your reservation is confirmed. Should you have any special requests or need to make any changes, please feel free to contact us at [Hotel Contact Information].");
    window.location.assign("https://dhavalfoodhut.netlify.app/")
  }





}
function Facebook() {
  window.location.assign("https://www.facebook.com")
}
function Insta() {
  window.location.assign("https://www.instagram.com/accounts/login/")
}
function Youtube() {
  window.location.assign("https://www.youtube.com/")
}
function Twitter() {
  window.location.assign("https://twitter.com/i/flow/login")
}
function Portfolio() {
  window.location.assign("https://dhavalportfolio.info/")
}

// function AdminNav() {
//   var header = document.getElementById("myDIV");
//   var btns = header.getElementsByClassName("tab-btn");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       var current = document.getElementsByClassName("tab-active");
//       current[0].className = current[0].className.replace(" tab-active", "");
//       this.className += " tab-active";
//     });
//   }
// }


export default validateForm;
export { Facebook, Insta, Youtube, Twitter, Portfolio };


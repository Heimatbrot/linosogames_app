import React from "react";

function Page6() {
  var password;
  var skeypass1secret = "Linus";
  var cacheExpiration = 12 * 60 * 60 * 1000 * 60; // 12 hours in milliseconds *60 -> 1month
  
  // Check if password is stored in local storage
  if (localStorage.getItem("password") && localStorage.getItem("timestamp")) {
    var currentTime = new Date().getTime();
    var storedTime = localStorage.getItem("timestamp");
    if (currentTime - storedTime < cacheExpiration) {
      password = localStorage.getItem("password");
    } else {
      localStorage.removeItem("password");
      localStorage.removeItem("timestamp");
      password = prompt('Ohne Passwort kommst du hier nicht weiter!\n','');
    }
  } else {
    password = prompt('Ohne Passwort kommst du hier nicht weiter!\n','');
  }
  
  if (password === skeypass1secret) {
    localStorage.setItem("password", password);
    localStorage.setItem("timestamp", new Date().getTime());
  } else {
    window.location.reload()
  }


  return (
    <div>
      <h1>This is Page 6</h1>
      <p>Welcome to Page 6</p>
    </div>
  );
}

export default Page6;
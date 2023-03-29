import React from "react";
import "./Page6.css";

function linosominigame() {
  document.getElementById("scoreboard").style.display = "none"
  document.getElementById("linosominigame").style.display = "block"
}

function linososhotgame() {
  document.getElementById("scoreboard").style.display = "none"
  document.getElementById("linososhotgame").style.display = "block"
}

function back(){
  document.getElementById("scoreboard").style.display = "block"
  document.getElementById("linososhotgame").style.display = "none"
  document.getElementById("linosominigame").style.display = "none"
}

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
    <div id="contentparticipants">
      <div id="scoreboard">
        <section class="intro">
          <h1>TEILNEHMERBEREICH</h1>
          <p>let the games begin!</p>
        </section>

        <br></br>
        <h1>coming soon</h1>
        <button onClick={linosominigame} className="selectionbutton">Linoso Minigame</button>
        <button onClick={linososhotgame} className="selectionbutton">Linoso Shotgame</button>
      </div>

      <div id="linosominigame">
        <h1>coming soon</h1>
        <button onClick={back} className="selectionbutton">zurück</button>
      </div>

      <div id="linososhotgame">
        <h1>coming soon</h1>
        <button onClick={back} className="selectionbutton">zurück</button>
      </div>
    </div>
  );
}

export default Page6;
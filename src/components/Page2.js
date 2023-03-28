import React from "react";
import "./Page2.css";

function Page2() {
  return (
    <div id="content">
      <section class="intro_winner">
        <h1>DIE GEWINNER</h1>
        <p class="intro_caption">Die Gewinner der offiziellen Linoso Games</p>
        <p class="credits">Bild von <a href="https://www.freepik.com/free-photo/front-view-kids-playing-with-potato-bags_5103816.htm#query=sackh%C3%BCpfen%20kinder&position=33&from_view=search&track=ais">Freepik</a></p>
      </section>

        <h3>2022</h3>
          <p>Sean (1), Jana (1), Valerio (1)</p>
          <h3>2023</h3>
          <p style={{ fontStyle: "italic" }}>noch nicht ausgetragen</p>
    </div>
  );
}

export default Page2;
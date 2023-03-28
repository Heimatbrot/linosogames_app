import React from "react";
import "./Page1.css";
import linosogames_gif_v2 from '../img/linosogames_gif_v2.gif';

function Page1() {
  return (
    <div id="content">
      <section class="intro_index">
          <h1>DIE LINOSO GAMES</h1>
          <p class="intro_caption">SINCE 2022</p>
          <p class="credits">Bild von <a href="https://www.freepik.com/free-photo/front-view-kids-playing-with-potato-bags_5103816.htm#query=sackh%C3%BCpfen%20kinder&position=33&from_view=search&track=ais">Freepik</a></p>
      </section>
      <img src={linosogames_gif_v2} alt="Linoso Games" id="logogif"/>
      <h3>DIE ERSTEN SPIELE</h3>
        <p>Die Linoso Games, bestehend aus einer Reihe von Kindergeburtstagsspielen, wurden erstmals im Oktober 2022 ausgetragen. Die Spiele sind für Kinder und Jugendliche gedacht und bieten eine unterhaltsame Möglichkeit, Geburtstage und andere Feierlichkeiten zu feiern.
        </p>
      <h3>DIE GEWINNER DER ERSTEN AUSGABE</h3>
        <p>Die erste Ausgabe der Linoso Games wurde von Sean, Jana und Valerio gewonnen. Als Preis für das Gewinnerteam wurde eine Goldene Gieskanne als Wanderpokal verliehen.
        </p>
      <h3>DIE SPIELE</h3>
        <p>Bei den ersten Linoso Games wurden folgende Spiele gespielt: Löffeleier, Dart, Sackhüpfen, Boccia, Mario Kart, Looping Lui, Kartenspiele und Tischtennis. Die Auswahl der Spiele bietet für Kinder und Jugendliche eine Vielfalt an Möglichkeiten, ihre Fähigkeiten und Fertigkeiten zu verbessern, während sie sich gleichzeitig amüsieren.
        </p>
      <h3>DIE GRUNDIDEE</h3>
        <p>Linoso Games setzt sich zum Ziel, ein Geburtstagsfest zu entwickeln, welches sicher, unterhaltsam und pädagogisch wertvoll ist. Die Spiele bieten Kindern die Möglichkeit, ihre Fähigkeiten und Fertigkeiten zu verbessern, während sie sich gleichzeitig amüsieren sowie auch duellieren können.
        </p>
      <h3>TEILNAHME</h3>
        <p>Wenn Sie an den Linoso Games teilnehmen möchten, müssen wir Sie leider entäuschen. Dies ist aktuell nur auf Einladung möglich. Für die Zukunft ist eine Teilnahme jedoch nicht ausgeschlossen.
        </p>
      <h3>UNSER ZIEL</h3>
        <p>Die Linoso Games sollen jährlich stattfinden und das Organisations-Team, bestehend aus Linus, Sean und Marc, soll regelmäßig für Spielanpassungen und Neuerungen sorgen, um die Spannung hoch zu halten.
          Das grösste Ziel der Linoso Games ist es, irgendwann im Hallenstadion vor einem Live-Publikum ausgetragen zu werden und von Sponsoren unterstützt zu werden. Mit einer Live-Übertragung weltweit im Fernsehen zur Prime Time soll eine möglichst große Zuschauerzahl erreicht werden.
        </p>
    </div>
  );
}

export default Page1;
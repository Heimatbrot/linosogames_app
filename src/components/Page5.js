import React from "react";
import { useState } from 'react';
import "./Page5.css";

function Page5() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  function toggleAccordion(index) {
    setActiveAccordion(activeAccordion === index ? null : index);
  }

  return (
    <div id="content">
      <section class="intro">
        <h1>HÄUFIG GESTELLTE FRAGEN</h1>
        <p>Frequently Asked Questions (FAQ)</p>
      </section>
      <h2>FAQ</h2>
        <hr />
      <button
        className={`accordion ${activeAccordion === 0 ? "active" : ""}`}
        onClick={() => toggleAccordion(0)}
      >
        WARUM GIBT ES DIE LINOSO GAMES?
      </button>
      <div className={`panel ${activeAccordion === 0 ? "show" : ""}`}>
        <p>
          Die Erfahrung hat gezeigt, dass eine "0815" Geburtstagsfeier immer
          eintönig und normal ist. Eines frühen Morgens, kam dem Jüngern Linus
          also die Idee, seine Geburtstagsfeier zu revolutionieren. Das Ziel war
          es, weg vom Standard zurück in die Vergangenheit zu kommen. Die Idee
          kein übliches Fest zu feiern war geboren. Doch wie soll das ganze
          aussehen? Um diese Frage zu klären, kontaktierte er seine beiden
          Freunde (Sean und Marc), holte ein bisschen Kreativität fördernden
          Weizen-Sirup. Boom die Linoso Games sind da!
        </p>
      </div>

      <button
        className={`accordion ${activeAccordion === 1 ? "active" : ""}`}
        onClick={() => toggleAccordion(1)}
      >
        WIE WERDEN DIE TEAMS ENTSCHIEDEN?
      </button>
      <div className={`panel ${activeAccordion === 1 ? "show" : ""}`}>
        <p>
        Zuerst werden die Teams gelost. Lediglich das Sieger Team des vorjahres darf/muss wieder als Team antreten. Ist ein Kandidat verhindert und die Teams gehen nicht mehr auf, kriegt das Sieger Team einen zusätzlichen Spieler (zugelost).
        </p>
      </div>

      <button
        className={`accordion ${activeAccordion === 2 ? "active" : ""}`}
        onClick={() => toggleAccordion(2)}
      >
        WER ENTSCHEIDET ÜBER DIE SPIELE UND DEREN REGELN?
      </button>
      <div className={`panel ${activeAccordion === 2 ? "show" : ""}`}>
        <p>
          Diese werden vom Orga Team geplant und gemeinsam festgelegt.
        </p>
      </div>

      <button
        className={`accordion ${activeAccordion === 3 ? "active" : ""}`}
        onClick={() => toggleAccordion(3)}
      >
        WER IST DAS ORGA TEAM?
      </button>
      <div className={`panel ${activeAccordion === 3 ? "show" : ""}`}>
        <p>
          Linus, Sean und Marc.
        </p>
      </div>

      <button
        className={`accordion ${activeAccordion === 4 ? "active" : ""}`}
        onClick={() => toggleAccordion(4)}
      >
        KANN ICH AUCH TEILNEHMEN?
      </button>
      <div className={`panel ${activeAccordion === 4 ? "show" : ""}`}>
        <p>
          Keine Einladung, keine Teilnahme, tut uns leid!  
        </p>
      </div>

      <button
        className={`accordion ${activeAccordion === 5 ? "active" : ""}`}
        onClick={() => toggleAccordion(5)}
      >
        DARF ICH DIE LINOSO GAMES NACHAHMEN?
      </button>
      <div className={`panel ${activeAccordion === 5 ? "show" : ""}`}>
        <p>
          Für dieses Anliegen bitte kontaktieren Sie das Orga Team per Kontaktforumar!
        </p>
      </div>

      <button
        className={`accordion ${activeAccordion === 6 ? "active" : ""}`}
        onClick={() => toggleAccordion(6)}
      >
        WIE LANGE DAUERT EINE ANTWORT PER KONTAKTFORULAR?
      </button>
      <div className={`panel ${activeAccordion === 6 ? "show" : ""}`}>
        <p>
        Dies können wir leider nicht definitiv sagen. Unser Posteingang wird nicht regelmässig überprüft.  
        </p>
      </div>



      <h2>KONTAKT</h2><hr></hr>
      <form
      action="https://formspree.io/f/mdovzzkw"
      method="POST"
      className="formlayout">
        <label className="formhead">
          Ihre Email Adresse:<br />
          <input type="email" name="email" className="forminput" />
        </label>
          <br />
        <label className="formhead">
          Ihre Anfrage:<br />
          <textarea name="message" className="formtext" />
        </label>
          <br />
        <button type="submit" className="formbutton">
          Absenden
        </button>
    </form>
    </div>
  );
}

export default Page5;
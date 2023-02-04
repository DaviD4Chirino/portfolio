import React from "react";
import photo_id from "/img/photo_2021-08-30_14-39-27.jpg";

export function Porfolio() {
  return (
    <>
      <section id="img_section">
        <img src={photo_id} alt="ID of David" className="thumbnail"></img>
        <div id="introduction">
          <h1>David Chirino</h1>
          <h2>Junior web developer</h2>
          <h3 id="subtitle">
            <p>Fluency in:</p>
            <ul>
              <li>Spanish (native)</li>
              <li>English</li>
            </ul>
          </h3>
        </div>
      </section>
      <hr></hr>
      <h1 className="white">About me:</h1>

      <AboutMe />
      <h1 className="white"> Programming languages:</h1>

      <Languages />
    </>
  );
}

function AboutMe() {
  return (
    <section id="about-me" className="info diagonal">
      <div id="programming-history" className="description">
        <p>
          I´m David, a <b>self-taught</b> programer and web-designer; <br></br>i
          love to make programs to help other people and myself to make mundane
          task more easy (sometimes automating them completely).
        </p>
        <p>
          I´m all about the intricacies and inner work the machines and
          providing a decent interface.
        </p>
        <p>I´ve been programing since i was 10-11 years old, starting with</p>
        <p>
          My modus operandi is to sketch the website down to a T in my notebook
          and following the rules while cheking that everyting works and looks
          good.
        </p>
        <p>
          Fun fact, my first "grown-up" programming languaje was <b>C++</b>
          because i thought it was a simpler version of <b>C#</b>.
        </p>
      </div>
    </section>
  );
}

function Language({ language }) {
  return (
    <li>
      <h3>{language.name}</h3>
      <div id="duration">
        <p>
          <b>{language.nro}</b> {language.format}
        </p>
      </div>
    </li>
  );
}

function Languages() {
  return (
    <section className="info" id="programming-languages">
      <ul>
        <Language
          language={{ name: "JavaScript", nro: "4", format: "Years" }}
        />
        <Language language={{ name: "HTML", nro: "4", format: "Years" }} />
        <Language language={{ name: "CSS", nro: "4", format: "Years" }} />
      </ul>
      <ul>
        <Language language={{ name: "jQuery", nro: "2", format: "Years" }} />
        <Language language={{ name: "ReactJs", nro: "1", format: "Year" }} />
        <Language language={{ name: "ElectronJS", nro: "1", format: "Year" }} />
      </ul>
      <ul>
        <Language language={{ name: "NodeJs", nro: "2", format: "Years" }} />
        <Language language={{ name: "PhP", nro: "3", format: "Years" }} />
        <Language language={{ name: "MySql", nro: "3", format: "Years" }} />
      </ul>
      <ul>
        <Language language={{ name: "Python", nro: "5", format: "Months" }} />
        <Language language={{ name: "C++", nro: "2", format: "Months" }} />
        <Language language={{ name: "C#", nro: "1", format: "Month" }} />
      </ul>
      <ul>
        <Language
          language={{ name: "AutoHotkey", nro: "2", format: "Years" }}
        />
        <Language
          language={{ name: "Godot (GDScript)", nro: "1", format: "Year" }}
        />
        <Language
          language={{
            name: "Twine (TwineScript)",
            nro: "3",
            format: "Years",
          }}
        />
      </ul>
    </section>
  );
}

import React from "react";
import "./sass/Portfolio.sass";
import "external-svg-loader";

import { HashLink as A } from "react-router-hash-link";
import { RiFileDownloadLine as DownloadFile } from "react-icons/ri";
import { BsFillMoonFill as MoonIcon } from "react-icons/bs";
//
export default function Portfolio() {
  return (
    <section id="Portfolio">
      <header
        className="
      flex flex-row
      "
      >
        <h1
          id="Title"
          className="
        center
        relative
        "
        >
          <MoonIcon
            id="Moon"
            className="
          absolute 
          "
          />
          <p>David</p>
          <p className="text-end">Space</p>
        </h1>
      </header>

      <main id="Info" className="grid padding center">
        <Index />

        <div className="wrapper">
          <section id="AboutMe" className="text-container center">
            <h2>About me</h2>
            <p>
              I´m David, a self-taught programer and web-designer; i love to
              make programs to help other people and myself to make mundane task
              more easy (sometimes automating them completely). I´m all about
              the intricacies and inner work the machines and providing a decent
              interface.I´ve been programing since i was 10-11 years old,
              starting withMy modus operandi is to sketch the website down to a
              T in my notebook and following the rules while cheking that
              everyting works and looks good.Fun fact, my first "grown-up"
              programming languaje was C++because i thought it was a simpler
              version of C#.
            </p>
            <DownloadCv />
          </section>
          <section id="KnownLanguages" className="text-container center ">
            <h2>Known Languages:</h2>
            <ul
              className="grid 
            "
            >
              <Language what="HTML" since={2019} />
              <Language what="CSS" since={2019} />
              <Language what="Javascript" since={2019} />
              <Language what="ReactJs" since={2022} />
              <Language what="Jquery" since={2021} />
              <Language what="NodeJs" since={2021} />
              <Language what="PhP" since={2020} />
              <Language what="MySql" since={2019} />
              <Language what="AutoHotkey" since={2020} />
              <Language what="Python" since={2018} />
              <Language what="Godot (GDScript)" since={2022} />
              <Language what="Twine (TwineScript)" since={2018} />
            </ul>
          </section>
        </div>
      </main>
    </section>
  );
}

function Language({ what = "", since = 0 }) {
  const current = new Date();
  const yearsSince = current.getUTCFullYear() - since;
  return (
    <li className="language">
      <h3 className="name">{what}</h3>
      <div className="date flex gap-05">
        <b className="number color-5"> {yearsSince}</b>
        {yearsSince > 1 ? "Years" : "Year"}
      </div>
    </li>
  );
}

function Index() {
  return (
    <div id="Index">
      <h2>Index</h2>
      <ul>
        <li>
          <A to="#AboutMe">About Me</A>
        </li>
        <li>
          <A to="#KnowLanguages">Languages</A>
        </li>
      </ul>
    </div>
  );
}

function DownloadCv() {
  return (
    <a id="DownloadCv" className="flex" href="files/David_Chirno.pdf">
      <DownloadFile />
      <h4>Download CV</h4>
    </a>
  );
}

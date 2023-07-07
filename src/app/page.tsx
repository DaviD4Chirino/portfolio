"use client";
import "./sass/Home.sass";

import WebDev from "@/modules/WebDev";

import { PiMoonFill as MoonI } from "react-icons/pi";
export default function Home() {
  return (
    <main id="Home">
      <Header />
      {/* I am a...*/}
      <WebDev />
    </main>
  );
}

function Header() {
  return (
    <header>
      <div className="container">
        <div id="Banner">
          <div className="title">
            <MoonI className="moon" />
            <h1 className="david">David</h1>
            <h1 className="space">Space</h1>
            <b className="slogan">Where ideas comes to thrive</b>
          </div>
        </div>
      </div>
    </header>
  );
}

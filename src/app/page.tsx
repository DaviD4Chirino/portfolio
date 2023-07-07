"use client";
import "./sass/Home.sass";

import { PiMoonFill as MoonI } from "react-icons/pi";
export default function Home() {
  return (
    <main id="Home">
      <Header />
    </main>
  );
}

function Header() {
  return (
    <header>
      <div className="container">
        <div id="Banner">
          <div className="hero">
            <div className="wrapper relative">
              <h1 className="hero-1">David</h1>
              <h1 className="hero-2">Space</h1>
              <MoonI className="absolute icon" />
            </div>
          </div>
          <div className="slogan">
            <b>Where ideas comes to thrive</b>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import "./sass/Home.sass";
import Img from "next/image";

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
            <h1 className="david">David</h1>
            <h1 className="space">Space</h1>
            <b className="slogan">Where ideas comes to thrive</b>
          </div>
          <Img
            src="/img/visual.jpg"
            alt="visual"
            className="visual"
            width={500}
            height={500}
          />
        </div>
      </div>
    </header>
  );
}

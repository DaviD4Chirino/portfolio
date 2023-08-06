"use client";
import "./sass/Home.sass";
import Img from "next/image";
import IndexLink from "@/components/IndexLink";
import { MdOutlineWeb as WebDevI } from "react-icons/md";
import { TfiWrite as WriteI, TfiGame as GameI } from "react-icons/tfi";
import WebDev from "@/modules/WebDev";
export default function Home() {
  return (
    <main id="Home">
      <Header />
      <article id="Index">
        <h2 className="text-center separator container ">I am a...</h2>
        <br />
        <div
          className="flex flex-1 flex-wrap gap container"
          style={{
            height: 220,
          }}
        >
          <IndexLink href="#WebDev" icon={<WebDevI />} desc="Web Developer" />
          <IndexLink href="#Writer" icon={<WriteI />} desc="Writer, Redactor" />
          {/* <IndexLink href="GameDev" icon={<GameI />} desc="Game Developer" /> */}
          {/* <IndexLink />
          <IndexLink />
          <IndexLink />
        <IndexLink /> */}
        </div>
      </article>
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

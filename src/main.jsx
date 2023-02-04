import React from "react";
import { Tabs } from "./Tabs";
import logo from "/img/github-svgrepo-com.svg";

export function Main() {
  document.title = "David Space";
  return (
    <>
      <Header />
      <section id="main">
        <Tabs />
      </section>
    </>
  );
}
function Header() {
  return (
    <header className="center" id="header">
      <div className="title ">
        <img
          src={logo}
          alt="github logo"
          className="logo"
          id="github-logo"
        ></img>
        <h1 className="name">David Space</h1>
      </div>
    </header>
  );
}

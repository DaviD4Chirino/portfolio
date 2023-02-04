import { React, useState } from "react";
import "./css/tabs.css";
import { Porfolio } from "./Porfolio";
import { Library } from "./library";
import { Projects } from "./Projects";
import { projects_info } from "./data/projects.data";

export function Tabs() {
  let [toggle, setToggle] = useState(1);

  let toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div id="tabs">
      <section id="tabs-buttons">
        <button
          className={toggle === 1 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(1)}
        >
          Porfolio
        </button>
        <button
          className={toggle === 2 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Projects
        </button>
        <button
          className={toggle === 3 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(3)}
        >
          Library
        </button>
      </section>
      <div id="tabs-contents">
        <div className={toggle === 1 ? "content active-content" : "content"}>
          <Porfolio />
        </div>
        <div className={toggle === 2 ? "content active-content" : "content"}>
          {projects_info.map((i) => (
            <Projects project={i} />
          ))}
        </div>
        <div className={toggle === 3 ? "content active-content" : "content"}>
          <Library />
        </div>
      </div>
    </div>
  );
}

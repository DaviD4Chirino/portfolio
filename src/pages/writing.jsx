import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { singlePart } from "../data/stories.data";
import { ContinueReading } from "../ContinueReading";
import { useLocation } from "react-router-dom";
import "../css/library_style.css";
import "../css/GoBackButton.css";

export function Writing() {
  let params = getParams();
  const [id, setId] = useState(params["cuento"]);
  const location = useLocation();
  useEffect(() => {
    params = getParams();
    setId(params["cuento"]);
    goToTop();
  }, [location]);

  return (
    <>
      <GoBackButton />
      <PrintStory id={id} />;
      <ContinueReading />;
    </>
  );
}
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function PrintStory({ id }) {
  let cuento = singlePart[id];
  let content = cuento.content.split("\n");
  document.title = "David Space - " + cuento.title;
  return (
    <main>
      <section id="cuento">
        <h1 id="title">{cuento.title}</h1>
        <div id="content">
          {content.map((i, n) => (
            <ParagraphWrapper prop={{ nro: n, paragraph: i }} />
          ))}
        </div>
      </section>
    </main>
  );
}

const ParagraphWrapper = ({ prop }) => {
  return <p id={prop.nro}> {prop.paragraph} </p>;
};

function GoBackButton() {
  return (
    <Link to="/" id="back-button">
      <i className="bi bi-arrow-left-circle-fill"></i>
      Home
    </Link>
  );
}

function getParams() {
  var idx = document.URL.indexOf("?");
  var params = [];
  var nameVal;
  if (idx !== -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    for (var i = 0; i < pairs.length; i++) {
      nameVal = pairs[i].split("=");
      params[nameVal[0]] = nameVal[1];
    }
  }
  return params;
}

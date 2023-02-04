import React from "react";
import { Link } from "react-router-dom";
import "/src/css/continueReading_style.css";
import { singlePart } from "./data/stories.data";
import { formatTitle } from "./FormatTitle";

export function ContinueReading() {
  return (
    <div id="continue_reading">
      {singlePart.map((i, n) => (
        <StoryCard story={i} id={n} />
      ))}
    </div>
  );
}

function StoryCard({ story, id }) {
  let titleId = story.title ? formatTitle(story.title) : "UNTITLED";
  let title = story.title ? story.title : "UNTITLED";
  let cover = story.cover ? story.cover : "IMAGE NOT FOUND";

  return (
    <section className="continue_reading" id={"continue_" + id}>
      <div className="continue_body">
        <Link to={"/writing?cuento=" + id}>
          <div className="continue_body_col-1">
            <img src={"/img/library/" + cover} alt={titleId}></img>
          </div>
          <div className="continue_body_col-2">
            <div className="continue_body_title">
              <h1>{title}</h1>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

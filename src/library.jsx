import React from "react";
import { Link } from "react-router-dom";

import { singlePart } from "./data/stories.data";

import { formatTitle } from "./FormatTitle";

export function Library() {
  return (
    <div>
      {singlePart.map((i, n) => (
        <ShowStoryCard story={i} id={n} />
      ))}
    </div>
  );
}

const ShowStoryCard = ({ story, id }) => {
  let titleId = story.title ? formatTitle(story.title) : "UNTITLED";
  let title = story.title ? story.title : "UNTITLED";
  let cover = story.cover ? story.cover : "UNTITLED";
  return (
    <section className="project_showcase library_showcase" id={titleId}>
      <div className="body">
        <Link to={"/writing?cuento=" + id} target="_blank" rel="noreferrer">
          <div className="col-1">
            <img src={"/img/library/" + cover} alt={title} />
          </div>
          <div className="col-2">
            <div className="project_title">
              <h1>{title}</h1>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

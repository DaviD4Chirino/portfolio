import React from "react";
export function Projects({ project }) {
  let weblink = project.weblink ? project.weblink : "#";
  let title = project.title ? project.title : "UNTITLED";
  let desc = project.desc ? project.desc : "NO DESCRIPTION";
  let img = project.img ? project.img : "404.png";
  let date = project.date ? project.date : "XX/XX/XX";
  let githubLink = project.githubLink ? project.githubLink : "";

  return (
    <section className="project_showcase" id={title}>
      <div className="body">
        <a href={weblink} target="_blank" rel="noreferrer">
          <div className="col-1">
            <img src={"./img/" + img} alt={title}></img>
          </div>
          <div className="col-2">
            <div className="project_title">
              <h1>{title}</h1>
              <div className="date">
                <b>{date}</b>
              </div>
            </div>
            <div className="project_description">
              <p>{desc}</p>
            </div>
          </div>
        </a>
      </div>
      <GithubButton link={githubLink} />
    </section>
  );
}

function GithubButton({ link }) {
  if (!link) {
    return;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="icon-button">
      <i className="bi bi-github"></i>
      <p className="icon-button-text">Visit the GitHub page!</p>
    </a>
  );
}

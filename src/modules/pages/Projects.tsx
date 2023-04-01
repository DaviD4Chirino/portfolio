import "./sass/Projects.sass";
import { Link } from "react-router-dom";
import data from "./data/projects.data";
import { goToTop } from "../../utility/goToTop";
export default function Projects() {
  const newest = data[0];
  const projects: any[] = getData();
  const cards: any = getDataCards(projects);

  const newestData = {
    image: `img/${newest.img}` || "https://placehold.co/640x400",
    title: newest.title || "UNTITLED",
    description: newest.desc || "NO DESCRIPTION",
    link: newest.weblink || newest.githubLink || "",
    date: newest.date || "XX/XX/XX",
    blank: true,
  };
  return (
    <section id="Projects" className="center">
      <Newest {...newestData} />
      <main id="CardHolder">{...cards}</main>
    </section>
  );
}

function getData() {
  const arr: any[] = [];
  data.map((_i, n) => data[n + 1] && arr.push(data[n + 1]));
  return arr;
}

function getDataCards(projects: any[]) {
  const arr: any[] = [];
  projects.map((i) => {
    const cardData = {
      image: `img/${i.img}` || "https://placehold.co/640x400",
      title: i.title || "UNTITLED",
      description: i.desc || "NO DESCRIPTION",
      link: i.weblink || i.githubLink || "",
      date: i.date || "XX/XX/XX",
      blank: true,
    };
    arr.push(<Card {...cardData} />);
  });
  return arr;
}

export function Newest(props: any) {
  return (
    <header
      id="Newest"
      role="button"
      style={{ backgroundImage: `url("${props.image}")` }}
    >
      <Link
        onClick={() => goToTop()}
        to={props.link}
        target={props.blank && "_blank"}
        className="link-unset"
        id="Info"
      >
        <div className="wrapper grid">
          <h2 id="Title" className="no-margin text-overflow-elipsis-multiline">
            {props.title}
          </h2>
          <p
            id="Desc"
            className="no-margin-bottom 
            text-overflow-elipsis-multiline
        "
          >
            {props.description}
          </p>
          <div id="Date" className="text-end">
            {props.date}
          </div>
        </div>
      </Link>
    </header>
  );
}
export function Card(props: any) {
  return (
    <Link
      onClick={() => goToTop()}
      to={props.link}
      target={props.blank && "_blank"}
      className="link-unset card "
      style={{
        backgroundImage: `url("${props.image}")`,
      }}
    >
      <div className="bg-color">
        <div className="card-info">
          <h3 className="card-title no-margin">{props.title}</h3>
          <div className="card-desc">{props.description}</div>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
    </Link>
  );
}

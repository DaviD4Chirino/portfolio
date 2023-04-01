import "./sass/Library.sass";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { toSnakeCase } from "../../utility/formatCase";
import { Newest, Card } from "./Projects";
import { singlePart as data } from "./data/stories.data";
const path = "/library/cuento/";
export default function Library() {
  return (
    <article id="Library" className="center">
      {/* <nav className="flex gap-05 margin">
        <Link to="cuento" className="link-unset">
          Cuento
        </Link>
        <Link to="index" className="link-unset">
          Library
        </Link>
      </nav> */}
      <Outlet />
    </article>
  );
}
export function Main() {
  const newest = data[0];
  const cuentos: any[] = getData();
  const cards: any = getDataCards(cuentos);

  const newestData = {
    image: `img/library/${newest.cover}` || "https://placehold.co/640x400",
    title: newest.title || "UNTITLED",
    description: newest.desc || "NO DESCRIPTION",
    link: path + "0",
    date: newest.date || "XX/XX/XX",
  };
  return (
    <article id="Main">
      <Newest {...newestData} />
      <div id="CardHolder">{...cards}</div>
    </article>
  );
}
function getData() {
  const arr: any[] = [];
  data.map((_i, n) => data[n + 1] && arr.push(data[n + 1]));
  return arr;
}

function getDataCards(projects: any[]) {
  const arr: any[] = [];
  projects.map((i, n) => {
    const cardData = {
      image: `img/library/${i.cover}` || "https://placehold.co/640x400",
      title: i.title || "UNTITLED",
      description: i.desc || "NO DESCRIPTION",
      link: path + (n + 1),
      date: i.date || "XX/XX/XX",
    };
    arr.push(<Card {...cardData} />);
  });
  return arr;
}

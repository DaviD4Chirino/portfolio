import "./sass/Cuento.sass";
import { useParams } from "react-router-dom";
import { BreakIntoParagraphs } from "../../utility/BreakIntoParagraphs";
import { toPascalCase } from "../../utility/formatCase";
import { Card } from "./Projects";
import { singlePart as data } from "./data/stories.data";
import {
  AiFillLike as FillLike,
  AiOutlineLike as EmptyLike,
} from "react-icons/ai";
const path = "/library/cuento/";

export function Cuento() {
  const { id }: any = useParams(),
    current = validate(data[id]),
    cards: Object[] = getDataCards(data);

  // const [favorite, setFavorite] = useState(
  //   localStorage.getItem(id) ? true : false
  // );

  // useEffect(() => {
  //   if (favorite) {
  //     localStorage.setItem(id, current.title);
  //   } else {
  //     localStorage.removeItem(id);
  //   }

  //   return () => {};
  // }, [favorite]);

  return (
    <>
      <article id="Cuento" className="padding-x ">
        <div id={toPascalCase(current.title)} className=" center-x ">
          <header id="Title" className="relative">
            {/* {
              <FavoriteIcon
                state={favorite}
                // onClick={() => setFavorite(!favorite)}
              />
            } */}
            <div className="wrapper">
              <h1 className="no-margin">{current.title}</h1>
              <b id="Date" className="no-margin text-end">
                {current.date}
              </b>
            </div>
          </header>
          <main id="Content" className="relative text-container center-x">
            <BreakIntoParagraphs text={current.content} />
          </main>
        </div>
      </article>
      <ContinueReading id={id} cards={cards} />
    </>
  );
}

function FavoriteIcon(p: any) {
  const onClick = p.onClick;
  const state = p.state;
  return (
    <button
      id="FavoriteIcon"
      className="
    icon button-unset
    absolute
    top left
    "
      onClick={onClick}
    >
      {state ? <FillLike /> : <EmptyLike />}
    </button>
  );
}

function ContinueReading(p: any) {
  const cards = data.map(
    (i, n) =>
      n != p.id && (
        <Card
          {...{
            image: `img/library/${i.cover}` || "https://placehold.co/640x400",
            title: i.title || "UNTITLED",
            description: i.desc || "NO DESCRIPTION",
            link: path + n,
            date: i.date || "XX/XX/XX",
          }}
        />
      )
  );

  return (
    <footer id="ContinueReading">
      <div id="CardHolderAfterReading">{...cards}</div>
    </footer>
  );
}

function validate(current: any) {
  return {
    title: current.title || "UNTITLED",
    content: current.content || "NO CONTENT",
    date: current.date || "XX/XX/XX",
    img: current.cover || "https://placehold.co/600x400",
  };
}
function getDataCards(projects: any[]) {
  const arr: any[] = [];
  projects.map((i, n) => {
    const cardData = {
      image: `img/library/${i.cover}` || "https://placehold.co/640x400",
      title: i.title || "UNTITLED",
      description: i.desc || "NO DESCRIPTION",
      link: path + n,
      date: i.date || "XX/XX/XX",
    };
    arr.push(<Card {...cardData} />);
  });
  return arr;
}

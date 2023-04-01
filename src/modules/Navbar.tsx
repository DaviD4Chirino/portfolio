import "./sass/Navbar.sass";
import { NavLink } from "react-router-dom";
import { scrollDirection } from "../utility/scrollDirection";
import { goToTop } from "../utility/goToTop";

import {
  AiFillHome as Home,
  AiFillGithub as Github,
  AiOutlineTwitter as Twitter,
  AiOutlineGoogle as Google,
  AiOutlineWhatsApp as WhatsApp,
} from "react-icons/ai";

export default function Navbar() {
  const clases = " scroll-" + scrollDirection(20);
  return (
    <nav id="Navbar" className={clases}>
      <div
        className="
        wrapper
        flex 
        justify-content-between
        gap-1
        margin
      "
      >
        <Pages />
        <Links />
      </div>
    </nav>
  );
}
function Links() {
  const clases = `
      flex 
      align-items-center
      justify-content-end
      icon
  `;
  return (
    <section id="Links" className={clases}>
      <a
        href="https://github.com/DaviD4Chirino"
        target="_blank"
        className="link-unset"
      >
        <Github />
      </a>
      <a
        href="https://twitter.com/Developer_Logos"
        target="_blank"
        className="link-unset"
      >
        <Twitter />
      </a>
      <a href="tel:+584126810567" className="link-unset">
        <WhatsApp />
      </a>
      <a
        href="mailto:genarodavid@gmail.com"
        target="_blank"
        className="link-unset"
      >
        <Google />
      </a>
    </section>
  );
}

function Pages() {
  return (
    <section
      id="Pages"
      className="
        flex gap
        align-items-center justify-items-center
        overflow-x-auto
        "
    >
      {/* <NavLink to="/" className="link-unset " onClick={() => goToTop()}>
        
      </NavLink> */}

      <NavLink
        to="/portfolio"
        onClick={() => goToTop()}
        className="link-unset Nav-link 
        flex align-items-center
        gap-1
        "
      >
        <Home />
        Porfolio
      </NavLink>
      <NavLink
        to="/projects"
        onClick={() => goToTop()}
        className="link-unset Nav-link"
      >
        Projects
      </NavLink>
      <NavLink
        to="/library"
        onClick={() => goToTop()}
        className="link-unset Nav-link"
      >
        Library
      </NavLink>
    </section>
  );
}

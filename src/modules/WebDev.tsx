import "./sass/WebDev.sass";
//* Icons imports
import { BiLogoJavascript as JavaScriptI } from "react-icons/bi";
import { AiFillHtml5 as HtmlI } from "react-icons/ai";
import {
  IoLogoCss3 as CssI,
  IoLogoElectron as ElectronI,
  IoLogoReact as ReactI,
  IoLogoNodejs as NodeI,
  IoLogoSass as SassI,
} from "react-icons/io5";
import {
  // Spell:disable-next-line
  SiGodotengine as GodotI,
  SiPhp as PhpI,
  SiJquery as JqueryI,
  SiTypescript as TypescriptI,
  SiMysql as MysqlI,
  SiPython as PythonI,
} from "react-icons/si";
//*

import { motion } from "framer-motion";
import Language from "../components/Language";
// import { Button, IconButton } from "@mui/material";
export default function WebDev() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <article id="WebDev">
      <h2 className="container text-center separator">I am a Web Developer</h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="icon-container"
      >
        {/* Keep it short */}
        <Language name="HTML" icon={<HtmlI />} since="2020-11-11" />
        <Language name="CSS" icon={<CssI />} since="2020-11-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2020-11-15" />
        <Language name="TypeScript" icon={<TypescriptI />} since="2021-05-05" />
        <Language name="JQuery" icon={<JqueryI />} since="2021-02-11" />
        <Language name="Sass" icon={<SassI />} since="2022-02-11" />
        <Language name="React Js" icon={<ReactI />} since="2022-02-11" />
        <Language name="Electron Js" icon={<ElectronI />} since="2022-02-11" />
        <Language name="PHP" icon={<PhpI />} since="2021-02-11" />
        <Language name="Node Js" icon={<NodeI />} since="2022-02-11" />
        <Language name="MySQL" icon={<MysqlI />} since="2023-02-11" />
        <Language name="Python" icon={<PythonI />} since="2023-02-11" />
        {/* <Language name="Godot" icon={<GodotI />} since="2021-02-11" /> */}
      </motion.div>
    </article>
  );
}

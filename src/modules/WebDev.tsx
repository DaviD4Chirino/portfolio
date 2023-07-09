"use client";
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
import {
  IoIosArrowBack as ArrowBackI,
  IoIosArrowForward as ArrowForwardI,
} from "react-icons/io";
//*
import { since } from "@/utils/Date";

import { motion } from "framer-motion";
import { Button, IconButton } from "@mui/material";
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
        <Language name="JavaScript" icon={<JavaScriptI />} since="2020-11-15" />
        <Language name="HTML" icon={<HtmlI />} since="2020-11-11" />
        <Language name="CSS" icon={<CssI />} since="2020-11-11" />
        <Language name="TypeScript" icon={<TypescriptI />} since="2021-05-05" />
        <Language name="Sass" icon={<SassI />} since="2022-02-11" />
        <Language name="React" icon={<ReactI />} since="2022-02-11" />
        <Language name="Electron" icon={<ElectronI />} since="2022-02-11" />
        <Language name="PHP" icon={<PhpI />} since="2021-02-11" />
        <Language name="Node" icon={<NodeI />} since="2022-02-11" />
        <Language name="MySQL" icon={<MysqlI />} since="2023-02-11" />
        <Language name="Python" icon={<PythonI />} since="2023-02-11" />
        {/* <Language name="Godot" icon={<GodotI />} since="2021-02-11" /> */}
        {/* <Language name="JQuery" icon={<JqueryI />} since="2021-02-11" /> */}
      </motion.div>
    </article>
  );
}

type LanguageProps = {
  name: string;
  icon: JSX.Element;
  /** A date string  YYYY-MM-DD*/
  since: string;
};
function Language(props: LanguageProps) {
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const time =
    parseInt(since(props.since, "year")) <= 0
      ? parseInt(since(props.since, "month")) > 1
        ? since(props.since, "month") + " months"
        : "1 month"
      : parseInt(since(props.since, "year")) > 1
      ? since(props.since, "year") + " years"
      : "1 year";
  return (
    <motion.div className="language" variants={item}>
      <div className="icon">{props.icon}</div>
      <b>{props.name}</b>
      <p>{time}</p>
    </motion.div>
  );
}

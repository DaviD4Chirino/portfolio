"use client";
import "./sass/WebDev.sass";
import { BiLogoJavascript as JavaScriptI } from "react-icons/bi";
import { since } from "@/utils/Date";

import { motion } from "framer-motion";
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
    <article id="WebDev" className=" color-1-bg">
      <h2 className="container text-center">I am a Web Developer</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="icon-container"
      >
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
        <Language name="JavaScript" icon={<JavaScriptI />} since="2022-02-11" />
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

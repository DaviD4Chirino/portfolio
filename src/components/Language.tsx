import { since } from "@/utils/Date";
import { motion } from "framer-motion";
type LanguageProps = {
  name: string;
  icon: JSX.Element;
  /** A date string  YYYY-MM-DD*/
  since: string;
  className?: string;
  id?: string;
};
export default function Language(props: LanguageProps) {
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
      <div
        className={`icon ${props.className ? props.className : ""}`}
        id={props.id || ""}
      >
        {props.icon}
      </div>
      <b>{props.name}</b>
      <p>{time}</p>
    </motion.div>
  );
}

import { useEffect, useState } from "react";
const padStart = (time: any) => time.toString().padStart(2, "0");
export default function clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const Interval = setInterval(() => {
      setDate(new Date());
    }, 10);
    return () => {
      clearInterval(Interval);
    };
  }, []);

  return date;
}

export function getTime(seconds: boolean = false, separator: string = ":") {
  const date = clock(),
    extra = seconds ? separator + padStart(date.getSeconds()) : "",
    format =
      padStart(date.getHours()) +
      separator +
      padStart(date.getMinutes()) +
      extra;

  return format;
}

export function getDate(format: string = "DD/MM/YY") {
  const date = clock();
  format.toUpperCase();
  let template = format;
  template = template.replace("DD", padStart(date.getDay()));
  template = template.replace("MM", padStart(date.getMonth()));
  template = template.replace("YY", padStart(date.getFullYear()));

  return template;
}
export function formatTime(minutes: number, seconds: number) {
  return minutes + ":" + padStart(seconds);
}
export function getMinutes(seconds: number) {
  return Math.floor(seconds / 60);
}
export function getRemainingSeconds(minutes: number, time: number) {
  return time - minutes * 60;
}

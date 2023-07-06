import { useEffect } from "react";

export default function repeat(func: any, interval: number) {
  useEffect(() => {
    const Interval = setInterval(() => {
      func();
    }, interval);
    return () => {
      clearInterval(Interval);
    };
  }, []);
}

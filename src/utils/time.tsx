import { useState } from "react";

/**
 * Converts time in milliseconds to a string formatted as "mm:ss".
 *
 * @param {number} millis - The time in milliseconds to be converted.
 * @return {string} The time in "mm:ss" format.
 */
export function millisToMinutesAndSeconds(
  millis: number
): string {
  const [formatted, setFormatted] = useState("00:00");
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  setFormatted(
    `${minutes}:${
      Number(seconds) < 10 ? "0" : ""
    }${seconds}`
  );
  return formatted;
}

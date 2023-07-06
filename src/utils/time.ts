/**
 * Converts time in milliseconds to a string formatted as "mm:ss".
 *
 * @param {number} millis - The time in milliseconds to be converted.
 * @return {string} The time in "mm:ss" format.
 */
export function millisToMinutesAndSeconds(
  millis: number
): string {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${
    Number(seconds) < 10 ? "0" : ""
  }${seconds}`;
}
/**
 * Formats the given number of seconds into a string of minutes and seconds.
 * ### mm:ss == 05:20
 * @param {number} seconds - The number of seconds to format.
 * @return {string} A formatted string in the format 'MM:SS'.
 */
export function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(
    remainingSeconds
  ).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

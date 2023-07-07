export function getUTCDate() {
  const date = new Date();
  return date.getUTCDate();
}

/**
 *
 * @param date string date as YYYY-MM-DD
 */
export function since(date: string, returns?: "year" | "month" | "day") {
  const separated = date.split("-");
  const year: number = parseInt(separated[0]);
  const month: number = parseInt(separated[1]);
  const day: number = parseInt(separated[2]);
  const now = new Date();
  const diff = now.getTime() - new Date(year, month - 1, day).getTime();
  if (returns === "year") {
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365)).toString();
  }
  if (returns === "month") {
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 30)).toString();
  }
  if (returns === "day") {
    return Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
  }
  return Math.floor(diff / (1000 * 60 * 60)).toString();
}

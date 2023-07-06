/**
 * Shuffles the elements of an array in place.
 *
 * @param {Array} array - The array to be shuffled.
 * @return {Array} - The shuffled array.
 */
export default function shuffleArray(array: Array<any>): Array<any> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function toSnakeCase(val: string) {
  let result = val.toLowerCase();
  result = result.replace(/ /g, "_");
  result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  result = result.replace(/\W/g, "");
  return result;
}
export function toPascalCase(text: string) {
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  text = text.replace(/[$-/:-?{-~!"^_`\[\]]/g, "_");
  let result = text.trim().split(" ");
  let unite: string = "";
  result.forEach((element) => {
    const firstLetter = element.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = element.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;

    unite = unite + capitalizedWord;
  });

  return unite;
}

export function BreakIntoParagraphs({ text = "", id = "P" }) {
  const arr: any = text.split("\n");
  const format: any[] = [];
  arr.forEach((element: string, index: number) =>
    format.push(<p id={id + index}>{element.trim()}</p>)
  );

  return <>{...format}</>;
}

import { useState } from "react";
export default function Story(p: any) {
  const [story, setStory] = useState(p.id);
  return <div>Story</div>;
}

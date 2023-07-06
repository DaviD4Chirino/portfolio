import { useState, useEffect } from "react";

/**
 * Returns the current screen size of the window.
 *
 * @return {{ x: number, y: number }} Object with the screen dimensions in pixels.
 */
export default function screenSize(): { x: number; y: number } {
  const [dimension, setDimension] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const detectSize = () => {
    setDimension({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimension]);
  return dimension;
}

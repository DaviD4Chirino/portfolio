import { useEffect } from "react";

/**
 * A custom React hook that listens for clicks outside of a specified ref and
 * calls a callback function when triggered.
 *
 * It also works on its children.
 *
 * @param {any} ref - the ref to watch for clicks outside of
 * @param {Function} onClickOutside - the function to call when a click outside
 * of the ref occurs
 *
 */
export default function useClickAway(ref: any, onClickOutside: Function): void {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target !== ref.current
      ) {
        onClickOutside();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

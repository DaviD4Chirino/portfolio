/**
 * Scrolls the window to the top of the page in a smooth fashion.
 *
 * @return {void} There is no return value.
 * @example
 * <button onClick={()=>scrollToTop()}>Scroll to top</button>
 */
export default function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
/**
 * Scrolls the page to the top using a legacy method.
 *
 * @return {void} This function does not return anything.
 *  @example
 * <button onClick={()=>scrollToTopLegacy()}>Scroll to top</button>
 */
export function scrollToTopLegacy(): void {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

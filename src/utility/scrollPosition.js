export function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  var scrollPercent = Math.round(
    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  );
  //get the percentage of scroll

  return isNaN(scrollPercent) ? "" : scrollPercent;
}

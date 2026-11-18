/**
 * Jump so `element`'s top sits `offset` px below the top of the screen, instantly
 * (even when the page has smooth in-page link scrolling turned on).
 */
export function jumpTo(element: HTMLElement, offset = 0) {
  // A plain number, so the browser doesn't add the element's scroll-margin on top.
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "instant" });
}

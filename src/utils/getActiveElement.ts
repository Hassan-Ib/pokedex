export default function getActiveElement(element: HTMLElement) {
  const queryString = "a, a[href], input, button";
  return element.querySelectorAll<HTMLElement>(queryString);
}

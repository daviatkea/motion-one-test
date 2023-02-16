import { animate, scroll } from "motion";

const el = document.querySelector(".element");

scroll(animate("h1", { x: 100 }), {
  target: el,
  offset: ["end", `-${el.clientHeight}px start`],
});

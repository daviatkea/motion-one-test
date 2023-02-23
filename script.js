import { animate, inView } from "motion";

// Create the query list.
const mediaQueryList = window.matchMedia("(min-width: 1000px)");

// Define a callback function for the event listener.
function handleOrientationChange(evt) {
  if (evt.matches) {
    inviewDesktop();
  } else {
    requestAnimationFrame(() => {
      inviewMobile();
    });
  }
}

// Run the orientation change handler once.
handleOrientationChange(mediaQueryList);

// Add the callback function as a listener to the query list.
mediaQueryList.addEventListener("change", handleOrientationChange);

const inviewDesktop = () => {
  return inView(".mangeelementerinview", () => {
    animate(".mangeelementer1", { x: [-2000, 200] }, { duration: 2 });
    animate(".mangeelementer2", { x: [-1500, 0] }, { duration: 2 });
    animate(".mangeelementer3", { x: [-1000, 0] }, { duration: 2 });
    animate(".mangeelementer4", { x: [-500, 0] }, { duration: 2 });
    animate(".mangeelementer5", { x: [-2000, 0] }, { duration: 2 });
    animate(".mangeelementer6", { x: [2000, 0] }, { duration: 2 });
    animate(".mangeelementer7", { x: [1500, 0] }, { duration: 2 });
    animate(".mangeelementer8", { x: [1000, 0] }, { duration: 2 });
    animate(".mangeelementer9", { x: [500, 0] }, { duration: 2 });
    animate(".mangeelementer10", { x: [2000, 0] }, { duration: 2 });
    return () => {
      animate(".mangeelementer1", { x: [-2000, 0] }, { duration: 2 });
      animate(".mangeelementer2", { x: [-1500, 0] }, { duration: 2 });
      animate(".mangeelementer3", { x: [-1000, 0] }, { duration: 2 });
      animate(".mangeelementer4", { x: [-500, 0] }, { duration: 2 });
      animate(".mangeelementer5", { x: [-2000, 0] }, { duration: 2 });
      animate(".mangeelementer6", { x: [2000, 0] }, { duration: 2 });
      animate(".mangeelementer7", { x: [1500, 0] }, { duration: 2 });
      animate(".mangeelementer8", { x: [1000, 0] }, { duration: 2 });
      animate(".mangeelementer9", { x: [500, 0] }, { duration: 2 });
      animate(".mangeelementer10", { x: [2000, 0] }, { duration: 2 });
    };
  });
};

const inviewMobile = () => {
  return inView(".mangeelementerinview", () => {
    animate(".mangeelementer1", { x: [-2000, 200] }, { duration: 2 });
    animate(".mangeelementer2", { x: [-1500, 100] }, { duration: 2 });
    animate(".mangeelementer3", { x: [-1000, 0] }, { duration: 2 });
    animate(".mangeelementer4", { x: [-500, 0] }, { duration: 2 });
    animate(".mangeelementer5", { x: [-2000, 0] }, { duration: 2 });
    animate(".mangeelementer6", { x: [2000, 0] }, { duration: 2 });
    animate(".mangeelementer7", { x: [1500, 0] }, { duration: 2 });
    animate(".mangeelementer8", { x: [1000, 0] }, { duration: 2 });
    animate(".mangeelementer9", { x: [500, 0] }, { duration: 2 });
    animate(".mangeelementer10", { x: [2000, 0] }, { duration: 2 });
    return () => {
      animate(".mangeelementer1", { x: [-2000, 0] }, { duration: 2 });
      animate(".mangeelementer2", { x: [-1500, 0] }, { duration: 2 });
      animate(".mangeelementer3", { x: [-1000, 0] }, { duration: 2 });
      animate(".mangeelementer4", { x: [-500, 0] }, { duration: 2 });
      animate(".mangeelementer5", { x: [-2000, 0] }, { duration: 2 });
      animate(".mangeelementer6", { x: [2000, 0] }, { duration: 2 });
      animate(".mangeelementer7", { x: [1500, 0] }, { duration: 2 });
      animate(".mangeelementer8", { x: [1000, 0] }, { duration: 2 });
      animate(".mangeelementer9", { x: [500, 0] }, { duration: 2 });
      animate(".mangeelementer10", { x: [2000, 0] }, { duration: 2 });
    };
  });
};

const open = document.querySelector(".active");
const close = document.querySelector("a.exit");
const stagger = document.querySelector(".stagger");
let t1 = gsap.timeline();

t1.to(".overlay", {
  opacity: 1,
  duration: 0.3,
  x: 0,
  pointerEvents: "auto",
});

t1.to(
  ".stagger",
  {
    x: 0,
    opacity: 1,
    stagger: 0.2,
  },
  "-=0.1"
);

t1.pause();

open.addEventListener("click", () => {
  t1.play();
});

close.addEventListener("click", () => {
  t1.reverse();
});

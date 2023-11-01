// gsap.from(".header", {duration : 1, y : "-100%", ease : "bounce"});
// gsap.from(".link", {duration : 2, opacity : 0, delay : 1, stagger : 0.5});
// gsap.from(".sidebar-left", {duration : 1, x : "-100vw", ease : "linear"});
// gsap.from(".sidebar-right", {duration : 1, x : "100vw", ease : "linear"});
// gsap.from (".footer", {duration : 1, y : "100%", ease : "bounce"});
// gsap.fromTo(".button", {opacity : 0, scale : 0, rotation : 720}, {duration : 1, delay : 3.5, opacity : 1, scale : 1, rotation : 0});

const button = document.querySelector("button");

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from(".header", {duration : 1, y : "-100%", ease : "bounce"})
  .from(".link", { duration: 2, opacity: 0, delay: 1, stagger: 0.5 })
  .from(".sidebar-left", { x: "-100vw", ease: "linear" })
  .from(".sidebar-right", { x: "100vw", ease: "linear" })
  .from(".footer", { y: "100%", ease: "bounce" })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
  );

//   gsap.fromTo('#cursor', {autoAlpha: 0, x: -20}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});

//   gsap.to("#text", {text: {value: "this is a custom text written to show my easy approaches to make the typewriting easy!"}, duration: 5, delay: 1, ease: "none"})

button.addEventListener("click", () => {
  timeline.timeScale(2);
  timeline.reverse();
});

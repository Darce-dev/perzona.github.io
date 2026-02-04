const layers = document.querySelectorAll(".layer");

function randomSlice() {
  const top = gsap.utils.random(0, 80);
  const height = gsap.utils.random(3, 10);

  return `inset(${top}% 0 ${100 - top - height}% 0)`;
}

function glitch() {
  const tl = gsap.timeline();

  tl.to(layers, {
    opacity: 1,
    x: () => gsap.utils.random(-6, 6),
    clipPath: randomSlice,
    duration: 0.08,
    stagger: 0.03,
    ease: "power1.inOut"
  })

  .to(layers, {
    clipPath: randomSlice,
    duration: 0.06
  })

  .to(layers, {
    opacity: 0,
    x: 0,
    clipPath: "inset(0 0 0 0)",
    duration: 0.12,
    ease: "sine.out"
  });
}

gsap.to(".logo", {
  y: 3,
  rotation: 0.6,
  duration: 6,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

setInterval(() => {
  if (Math.random() > 0.55) glitch();
}, 500);

// BLUR / GLOW RESPIRADO
gsap.to(".logo", {
  filter: "blur(1.4px)",
  duration: 5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

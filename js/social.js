window.addEventListener("load", () => {
  const socials = document.querySelector(".social-links");

  gsap.to(socials, {
    opacity: 1,
    y: -10,
    duration: 1,
    ease: "power2.out",
    delay: 2.2 
  });
});

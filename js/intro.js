window.addEventListener("load", () => {

  const intro = document.getElementById("intro-black");
  const video = document.getElementById("bg-video");
  const logo  = document.querySelector(".logo");

  gsap.set(video, {
    opacity: 0,
    filter: "brightness(0) contrast(3) blur(24px)"
  });

  // Logo inicia centrado (visible)
  gsap.set(logo, {
    y: 0
  });

  const introTl = gsap.timeline({ delay: 0.2 });

  introTl
    // Fondo aparece
    .to(video, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    }, 0)

    // Glitch corto
    .to(video, {
      filter: "brightness(0.3) contrast(2.6) blur(10px)",
      duration: 0.07,
      repeat: 4,
      yoyo: true
    }, "-=0.8")

    // Fondo se limpia
    .to(video, {
      filter: "brightness(0.6) contrast(1.5) saturate(2) blur(0)",
      duration: 1
    })

    
    .to(intro, {
      opacity: 0,
      duration: 1.2,
      ease: "sine.out",
      onComplete: () => {
        // Mostrar las tarjetas cuando termine la animación del logo
        const cards = document.querySelector(".cards");
        if (cards) {
          cards.classList.add("show");
        }
        // Mostrar los iconos de redes sociales
        const socialLinks = document.querySelector(".social-links");
        if (socialLinks) {
          socialLinks.classList.add("show");
        }
      }
    }, "-=0.9")

    

    

    
});

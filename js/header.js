// Header sticky al hacer scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const stickyHeader = document.querySelector('.sticky-header');
  const centerLogo = document.querySelector('.center');
  const socialLinks = document.querySelector('.social-links');
  
  // Calcular punto de activación dinámicamente basado en el tamaño de la ventana
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  let activationPoint;
  if (windowWidth <= 480) {
    // Móviles: activar muy temprano
    activationPoint = Math.min(150, windowHeight * 0.15);
  } else if (windowWidth <= 768) {
    // Tablets: activar temprano
    activationPoint = Math.min(200, windowHeight * 0.2);
  } else {
    // Desktop: activar normal
    activationPoint = Math.min(250, windowHeight * 0.25);
  }
  
  if (scrollPosition > activationPoint) {
    document.body.classList.add('scrolled');
    stickyHeader.classList.add('show');
  } else {
    document.body.classList.remove('scrolled');
    stickyHeader.classList.remove('show');
  }
  
  // Calcular transformación basada en scroll (más sutil y gradual)
  const maxScroll = windowHeight * 0.8; // Máximo scroll para la animación
  const scrollRatio = Math.min(scrollPosition / maxScroll, 1);
  const translateY = -scrollRatio * 80; // Sube hasta -80vh para que desaparezcan completamente
  const opacity = 1 - scrollRatio;
  
  if (centerLogo) {
    centerLogo.style.transform = `translateY(${translateY}vh)`;
    centerLogo.style.opacity = opacity;
  }
  
  if (socialLinks) {
    socialLinks.style.transform = `translateX(-50%) translateY(${translateY}vh)`;
    socialLinks.style.opacity = opacity;
  }
});

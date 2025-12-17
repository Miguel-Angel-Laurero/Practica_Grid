document.getElementById('toggle-theme').addEventListener('click', () => {
  document.documentElement.classList.toggle('theme-dark');
});

/* Fade out dinamico */

// Seleccionamos TODAS las imágenes del layout
const images = document.querySelectorAll('article');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Si la imagen está por lo menos un 50% visible
    if (entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('fade-visible');
      entry.target.classList.remove('fade-out');
    } else {
      // Cuando empieza a desaparecer tanto por arriba como por abajo
      entry.target.classList.add('fade-out');
      entry.target.classList.remove('fade-visible');
    }
  });
}, {
  threshold: [0, 0.5, 1] // detecta parcial, media y completa visibilidad
});

// Observamos cada imagen
images.forEach(img => observer.observe(img));

document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("menu-sound");
  const links = document.querySelectorAll("nav a");
  
  // 🎧 Reproducir sonido al pasar el ratón por encima
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      sound.currentTime = 0;
      sound.play().catch(() => {}); // Reproduce el sonido y maneja posibles errores
    });
  });
});

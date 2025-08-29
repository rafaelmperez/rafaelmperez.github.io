document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("menu-sound");
  const links = document.querySelectorAll("nav a");

  // 🔓 Activar permiso de reproducción tras el primer clic
  document.body.addEventListener("click", () => {
    sound.play().catch(() => {}); // Esto desbloquea el audio en navegadores que lo requieren
  });

  // 🎧 Reproducir sonido al pasar el ratón por encima
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      sound.currentTime = 0;
      sound.play();
    });
  });
});

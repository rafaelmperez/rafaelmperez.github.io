document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleReadingMode');

  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('reading-mode');

      // Cambia el texto del botón
      btn.textContent = document.body.classList.contains('reading-mode')
        ? '⛔ Salir del modo lectura'
        : '🕮 Modo lectura';
    });
  }
});

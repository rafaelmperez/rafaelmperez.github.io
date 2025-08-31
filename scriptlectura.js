document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleReadingMode');

  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('reading-mode');

      // Cambia el texto del botón según el estado
      btn.textContent = document.body.classList.contains('reading-mode')
        ? '⛔ Salir del modo lectura'
        : '🕮 Modo lectura';

      // Guarda preferencia en localStorage
      localStorage.setItem('modoLectura', document.body.classList.contains('reading-mode'));
    });

    // Aplica modo lectura si estaba activado previamente
    if (localStorage.getItem('modoLectura') === 'true') {
      document.body.classList.add('reading-mode');
      btn.textContent = '⛔ Salir del modo lectura';
    }
  }
});

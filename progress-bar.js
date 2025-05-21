document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');

  // Animación al cargar la página
  progressBar.style.width = '100%';
  setTimeout(() => {
    progressBar.style.width = '0';
  }, 300);

  // Interceptamos todos los enlaces que van a páginas internas .html
  const links = document.querySelectorAll('a[href$=".html"]:not([target="_blank"])');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();  // Detener navegación inmediata
      const targetUrl = link.href;

      // Reiniciar y mostrar barra
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      progressBar.offsetWidth; // Forzar reflow

      // Animar barra al 100% en 1.3 segundos
      progressBar.style.transition = 'width 1.3s ease-in-out';
      progressBar.style.width = '100%';

      // Redirigir después de 1.3 segundos
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1300);
    });
  });
});

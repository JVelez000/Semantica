document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');

  progressBar.style.width = '100%';
  setTimeout(() => {
    progressBar.style.width = '0';
  }, 300);

  const links = document.querySelectorAll('a[href$=".html"]:not([target="_blank"])');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetUrl = link.href;

      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      progressBar.offsetWidth;

      progressBar.style.transition = 'width 1s ease-in-out';
      progressBar.style.width = '100%';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    });
  });
});

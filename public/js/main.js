// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('hero', 'components/hero/hero.html');
  loadComponent('double-hero', 'components/double-hero/double-hero.html');
  loadComponent('header', 'components/header.html');
  loadComponent('main-content', 'components/mainContent/mainContent.html');
  loadComponent('footer', 'components/footer.html');
});

function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

function showAlert() {
  alert('Button clicked!');
}

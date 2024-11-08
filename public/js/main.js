// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'components/header.html');
  loadComponent('hero', 'components/hero/hero.html');
  loadComponent('double-hero', 'components/double-hero/double-hero.html');
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

// Function to observe when the text comes into view
// function animateOnView(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate');
//     } else {
//       entry.target.classList.remove('animate');
//     }
//   });
// }

// // Create an IntersectionObserver instance
// const observer = new IntersectionObserver(animateOnView, {
//   threshold: 0.1,
// });

// // Select the elements you want to animate and observe them
// document.querySelectorAll('.visible').forEach((el) => {
//   console.log(el);
//   observer.observe(el);
// });

const observer = new IntersectionObserver(
  (intersections) => {
    intersections.forEach(({ target, isIntersecting }) => {
      target.classList.toggle('animate', isIntersecting);
    });
  },
  {
    threshold: 0,
  }
);

document.querySelectorAll('.visible').forEach((div) => {
  console.log(div);
  observer.observe(div);
});

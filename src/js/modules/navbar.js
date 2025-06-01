const toggleButton = document.getElementById('toggle-menu');
const menu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

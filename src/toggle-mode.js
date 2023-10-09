let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');

  const theme = darkMode ? 'light' : 'dark';

  event.currentTarget.querySelector('span').textContent = `${theme} mode ativado`;

  darkMode = !darkMode;
})
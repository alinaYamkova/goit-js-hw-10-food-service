import css from './css/styles.css'
import menuData from './data/menu.json'
import menuBar from './templates/menu-theme.hbs'

const ulList = document.querySelector('.js-menu');
const newLiItem = menuBar(menuData);
const checkBox = document.querySelector('#theme-switch-toggle');
const body = document.body;
ulList.insertAdjacentHTML('afterbegin', newLiItem);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', onThemeChange);
function onThemeChange(evt) {
  evt.preventDefault();

  if (event.target.checked) {
    body.classList.toggle(Theme.DARK); 
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.toggle('light-theme');
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', 'light-theme');
  }
};

function savedThemeColor() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-theme') {
    body.classList.add(Theme.DARK);
    checkBox.checked = true;
  }
};
savedThemeColor();

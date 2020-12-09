import css from './css/styles.css'
import menuData from './data/menu.json'
import menuBar from './templates/menu-theme.hbs'

const ulList = document.querySelector('.js-menu');
const newLiItem = menuBar(menuData);
const checkBox = document.querySelector('#theme-switch-toggle');
ulList.insertAdjacentHTML('afterbegin', newLiItem);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const replaceTheme = (oldTheme, newTheme) => {
  document.body.classList.remove();
  document.body.classList.add();
  return;  
}

const body = document.body;

checkBox.addEventListener('change', onThemeChange);

function onThemeChange(evt) {
  evt.preventDefault();

  // if (event.target.checked) {
  //   replaceTheme(Theme.LIGHT, Theme.DARK);
  //   localStorage.setItem('theme', Theme.DARK);
  // } else {
  //   replaceTheme(Theme.DARK, Theme.LIGHT);
  //   localStorage.setItem('theme', Theme.LIGHT);
  // }

  if (event.target.checked) {
    body.classList.add(Theme.DARK); 
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

function savedThemeColor() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    body.classList.add(Theme.DARK); 
    // replaceTheme(Theme.LIGHT, Theme.DARK);
    checkBox.checked = true;
  }
};
savedThemeColor();

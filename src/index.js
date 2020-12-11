import css from './css/styles.css'
import menuData from './data/menu.json'
import menuBar from './templates/menu-theme.hbs'

const ulList = document.querySelector('.js-menu');
const newLiItem = menuBar(menuData);
const checkBox = document.querySelector('#theme-switch-toggle');
ulList.insertAdjacentHTML('afterbegin', newLiItem);

const body = document.body;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', onThemeChange);

const replaceTheme = (oldTheme, newTheme) => {
  document.body.classList.remove(oldTheme), 
  document.body.classList.add(newTheme);
};

function onThemeChange(evt) {
  evt.preventDefault();
  
  if (event.target.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
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

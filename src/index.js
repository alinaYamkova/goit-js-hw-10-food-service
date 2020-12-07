import css from './css/styles.css'
import menuData from './data/menu.json'
import menuBar from './templates/menu-theme.hbs'
// console.log(menuData);
// console.log(menuBar);
const ulList = document.querySelector('.js-menu');
const newLiItem = menuBar(menuData);
const checkBox = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// console.log(ulList);
// console.log(newLiItem);
ulList.insertAdjacentHTML('afterbegin', newLiItem);
// const postAsObj = JSON.parse(newLiItem);
// console.log(postAsObj);

const bodyColor = document.body;
checkBox.addEventListener('change', onThemeChange);

function onThemeChange(evt) {
  evt.preventDefault();
  if (event.target.checked) {
    bodyColor.classList.toggle('dark-theme'); 
    bodyColor.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyColor.classList.toggle('light-theme');
    bodyColor.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
};

function savedThemeColor() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.toggleSwitch.checked = true;
  }
  if (savedTheme === 'light-theme') {
    refs.body.classList.add(Theme.LIGHT);
    refs.toggleSwitch.checked = false;
  }
};
// console.log(savedTheme);
savedThemeColor();

import css from './css/styles.css'

import menuData from './data/menu.json'
import menuBar from './templates/menu-theme.hbs'
console.log(menuData);
console.log(menuBar);

const ulList = document.querySelector('.js-menu');
console.log(ulList);
const newPost = menuTpl(menuData);
console.log(newPost);
const postAsObj = JSON.parse(newPost);
console.log(postAsObj);

ulList.insertAdjacentHTML('afterbegin', newPost);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
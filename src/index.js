import './styles.css';
import menu from './menu.json';
import menuTemplate from './template/menu.hbs';

const listMenuRef= document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const input = document.querySelector('input.js-switch-input');

const temp = menu.reduce((acc, el) => acc + menuTemplate(el), '');
listMenuRef.innerHTML = temp;


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const saveTheme = (theme) => {
  localStorage.setItem('theme', theme)
}


const initTheme = (defaultTheme) => {
  const savedTheme = localStorage.getItem('theme');

  if(savedTheme) {
    bodyRef.classList.add(savedTheme)

    if(savedTheme === Theme.DARK) {
      input.checked = true;
    }
  } else {
    bodyRef.classList.add(defaultTheme)
  }
}


const themeChanges = () => {
  if(input.checked) {
    saveTheme(Theme.DARK)
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);

  } else {
    saveTheme(Theme.LIGHT)
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

initTheme(Theme.LIGHT);
input.addEventListener('change', themeChanges)




// if(!localStorage.getItem('theme'))  {
//   localStorage.setItem('theme', Theme.LIGHT)
// }


// function themeChanges() {
//   if(bodyRef.classList.contains(Theme.LIGHT)) {
//     localStorage.setItem('theme', Theme.DARK)
//     bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);
//     bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
//   }
// }

  
// input.addEventListener('change', themeChanges)
// bodyRef.classList.add(localStorage.getItem('theme'));


// if(bodyRef.classList.contains(Theme.DARK)) {
//   input.checked = true;
// } else {
//   input.checked = false;
// }
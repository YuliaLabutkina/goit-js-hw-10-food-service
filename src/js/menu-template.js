import menu from '../menu.json';
import menuTemplate from '../template/menu.hbs';

const listMenuRef= document.querySelector('.js-menu');

const temp = menu.reduce((acc, el) => acc + menuTemplate(el), '');
listMenuRef.innerHTML = temp;
// Раскрывющийся список Меню
const navToggle = document.querySelector('.main-header__button--closed');
const navMenu = document.querySelector('.main-header__navigation');

navToggle.classList.remove('main-header__button--nojs');
navMenu.classList.remove('main-header__navigation--nojs');

navToggle.onclick = function() {
  navMenu.classList.toggle('main-header__navigation--closed');
  navMenu.classList.toggle('main-header__navigation--opened');
  navToggle.classList.toggle('main-header__button--opened');
  navToggle.classList.toggle('main-header__button--closed');
};

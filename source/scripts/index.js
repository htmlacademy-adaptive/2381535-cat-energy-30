// Раскрывющийся список Меню
const navToggle = document.querySelector('.main-header__button');
const navMenu = document.querySelector('.main-header__navigation');

navMenu.classList.remove('main-header__navigation--nojs');
navToggle.classList.remove('main-header__button--active');


//  const contactsWrapper = document.querySelector('.contacts__wrapper');
//  if (window.innerWidth >= 1280) {
//    contactsWrapper.classList.remove('contacts__wrapper--background');
//  } else if (window.innerWidth < 1280) {
//    contactsWrapper.classList.add('contacts__wrapper--background');
//  }

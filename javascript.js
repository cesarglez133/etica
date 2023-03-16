const menuBtn = document.querySelector('.menu-toggle button');
const menu = document.querySelector('.menu');


menuBtn.addEventListener('click', function() {
  menu.classList.toggle('mostrar');
});

const menuBtnClose = document.querySelector('.menu-toggle-close button');

menuBtnClose.addEventListener('click', function() {
  menu.classList.remove('mostrar');
});

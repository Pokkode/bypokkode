//change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});


// show/hide nav menu
var menu = document.querySelector(".nav__menu");
var menuBtn = document.querySelector("#open-menu-btn");
var closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});


// close nav menu
var closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav);

window.sr = ScrollReveal();

sr.reveal('.lft', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.rgt', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.tp', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.bt', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
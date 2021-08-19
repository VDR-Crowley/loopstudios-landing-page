let menu_mobile = document.querySelector('.menu-mobile');
let menu_nav = document.querySelector('.menu-nav');
let menu_ul = document.querySelector('.menu-ul');
let menu_mobile_img = document.querySelector('.menu-mobile img');

menu_mobile.addEventListener('click', () => {
  if(menu_nav.classList.contains('ativo') != true) {
    menu_nav.classList.add('ativo');
    menu_nav.style.width = '100vw';
    menu_ul.style.left = '0';
    menu_mobile_img.src = "./images/icon-close.svg";
    document.body.style.overflow = 'hidden';
  } else {
    menu_nav.classList.remove('ativo');
    menu_nav.style.width = '0vw';
    menu_ul.style.left = '-5000px';
    menu_mobile_img.src = "./images/icon-hamburger.svg";
    document.body.style.overflow = '';
  }
});
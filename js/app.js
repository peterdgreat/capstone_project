const navBar = document.querySelector('#navbarNav');

const menu = document.querySelector('.hamburger');

const closeBtn = document.querySelector('.close');

const toggle = () => {
  navBar.classList.toggle('d-none');
  navBar.classList.toggle('show');
  menu.classList.toggle('d-none');
  closeBtn.classList.toggle('d-none');
};

menu.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);

const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click' , () =>{
    menu.classList.toggle("mobile-menu--active");
    menuLinks.classList.toggle("navbar-menu--active");

})


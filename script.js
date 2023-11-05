const menu = document.querySelector("#menu");
const background = document.querySelector("#background");
const sideNav = document.querySelector("#sidenav");
const closeBtn = document.querySelector("#close");


closeBtn.addEventListener('click', function () {
    background.style.transform = 'translateX(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sideNav.style.left = '-10%';
})

menu.addEventListener('click', function () {
    background.style.transform = 'translateX(200px) scale(.8) rotateY(-4deg) skewY(3deg)';
    background.style.filter = 'blur(.5px)';
    sideNav.style.left = '2%';
})


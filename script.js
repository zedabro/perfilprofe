let ul = document.querySelector('.ul');
let btn = document.querySelector('.toggle');

btn.addEventListener('click', function () {
    btn.classList.toggle('btn');

    ul.classList.toggle('show');
});


window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    

    if (window.scrollY >= 400) {
        header.style.position = 'fixed';
        header.style.backgroundColor = '#473E66';
        header.style.color = '#F5D7DB'
        header.style.zIndex = '10';
        header.style.width = '100%';
        
    } else {
        header.style.position = 'relative';
        header.style.backgroundColor = 'transparent';
        header.style.zIndex = '10';
        header.style.width = '100%';
        header.style.color = 'black';
    }
});


window.addEventListener('scroll', function () {
    var header = document.querySelector('.dark-mode header');
    

    if (window.scrollY >= 400) {
        header.style.position = 'fixed';
        header.style.backgroundColor = '#06142E';
        header.style.color = '#F5D7DB'
        header.style.zIndex = '10';
        header.style.width = '100%';
        
    } else {
        header.style.position = 'relative';
        header.style.backgroundColor = 'transparent';
        header.style.zIndex = '10';
        header.style.width = '100%';
    }
});





let isMenuOpen = false;

function closeMenu() {
    btn.classList.remove('btn');
    ul.classList.remove('show');
    isMenuOpen = false;
}

document.addEventListener('click', function(event) {
    const isClickInsideMenu = ul.contains(event.target);
    const isClickOnBtn = btn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBtn && isMenuOpen) {
        closeMenu();
    }
});




function turnOnLight() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    activateScrollReveal();
}

function activateScrollReveal() {
    window.sr = ScrollReveal({ reset: true });
   
    sr.reveal('.section', { duration: 1200 });
    sr.reveal('.tech', { duration: 1000 });
    sr.reveal('.soft', { duration: 1000 });
    sr.reveal('.projetos-container', { duration: 2000 });
    sr.reveal('.contact', { duration: 1000 });
}



var typed = new Typed('.typing', {
    strings: [
        '+2 años experiencia',
        '"Desarrolador web fullstack"',
    ],
    typeSpeed: 50,
    backSpeed: 20, 
    startDelay: 800, 
    smartBackspace: true, 
    loop: true, 
});

var typed2 = new Typed('.typing2', {
    strings: [
        'Federico Diaz',
        'Desarrollador web fullstack',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 100,
    smartBackspace: true,
    loop: true,
});

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}



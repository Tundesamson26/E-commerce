const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById('nav-toggle'),
        nav = document.getElementById('nav-menu')

        if(toggle && nav){
             toggle.addEventListener('click', ()=>{
                 nav.classList.toggle('show')
             })
        }
};
showMenu('nav_toggle','nav_menu')

// === Remove mobile menu ===
var navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    var navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))
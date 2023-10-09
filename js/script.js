const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle')
     navClose = document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        document.getElementById("footer").style.marginBottom="170px"
        
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        document.getElementById("footer").style.marginBottom="0px"
    })
}
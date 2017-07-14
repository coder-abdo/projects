/*global consol, alert*/
var containerBtn = document.querySelector('#toggle'),
    clicked = false,
    myNav = document.querySelector('nav');
containerBtn.addEventListener('click', function(){
    if(!clicked){
        clicked = true;
        this.classList.toggle('active');
        myNav.classList.toggle('open');
        setTimeout(function(){
            clicked = false;
        },500);
    }
},false);
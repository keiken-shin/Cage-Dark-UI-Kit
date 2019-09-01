let toggler = false;

let hamIcon = document.querySelector(".hamburger-icon");
let nav = document.querySelector(".navbar");

hamIcon.addEventListener('click', () => {

    if(toggler === false){
        nav.style.visibility = "visible";
        // nav.style.transition = 'max-height 1s ease-in';
        toggler = true;
    }else if(toggler === true){
        nav.style.visibility = "hidden";
        toggler = false;
    }

})
let toggler = false;

let hamIcon = document.querySelector(".hamburger-icon");
let nav = document.querySelector(".navbar");

try{
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
}catch(err){}

function copyURI(e) {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.getAttribute('href')).then(() => {
      e.target.textContent = "Copied to clipboard"
      setTimeout(() => e.target.textContent = "Get Cage CDN", 2000)
    }, () => {
      /* clipboard write failed */
    });
}
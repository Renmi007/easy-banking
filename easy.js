const btn = document.querySelector(".btn-open");
const nav = document.querySelector(".header-nav > nav");

const openMe =()=>{
    if(nav.style.display == 'block'){
        nav.style.display = "none"
        btn.src = "./images/icon-hamburger.svg";
    }else{
        nav.style.display = 'block';
        btn.src = "./images/icon-close.svg"
    }
}

btn.addEventListener("click", openMe)
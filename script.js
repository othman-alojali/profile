const text = [
"Software Engineer",
".NET Developer",
"Full Stack Developer"
];


let index = 0;
let char = 0;

const typing = document.querySelector(".typing");


function type(){

    if(char < text[index].length){

        typing.textContent += text[index][char];
        char++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}


function erase(){

    if(char > 0){

        typing.textContent =
        text[index].substring(0,char-1);

        char--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length)
            index=0;


        setTimeout(type,500);

    }

}

const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

// استرجاع آخر وضع
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    document.body.classList.add("light");
    icon.classList.replace("fa-moon","fa-sun");
}

themeBtn.onclick = ()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        icon.classList.replace("fa-moon","fa-sun");

    }else{

        localStorage.setItem("theme","dark");

        icon.classList.replace("fa-sun","fa-moon");

    }

}
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>180){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 180){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
const menu=document.getElementById("menu-btn");
const nav=document.getElementById("nav");

menu.onclick=()=>{

    nav.classList.toggle("active");

}
type();
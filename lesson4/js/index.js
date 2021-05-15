/*Information - Footer*/
let d = new Date();
let theyear = d.getFullYear();
document.querySelector("#currentyear").textContent = theyear;
document.querySelector('#lastupdate').textContent = document.lastModified;

/*Responsive Navigation Bar/*
/*const button = document.querySelector(".ham-menu");
const navigation = document.querySelector(".nav-bar");
button.addEventListener("click", () => {navigation.classList.toggle("responsive")}, false);*/

function responsiveNav() {
    document.getElementsByClassName("nav-bar")[0].classList.toggle("responsive");
}
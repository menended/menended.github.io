//Current Day
const datefield = document.querySelector("#todaysdate");
const now = new Date ();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;

//Last Updated
let d = new Date();
let theyear = d.getFullYear();
document.querySelector("#currentyear").textContent = theyear;

//Responsive Navigation Bar
function responsiveNav() {
    document.getElementsByClassName("nav-bar")[0].classList.toggle("responsive");
}
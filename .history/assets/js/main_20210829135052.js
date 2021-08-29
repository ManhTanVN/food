let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

console.log(menu)

menu.onlick = () => {
    menu.classList.toggle('fa-times');
}
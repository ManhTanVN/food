let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");


menu.onlick = () => {
    menu.classList.toggle("fa-bars");
}
console.log(menu)

function e() {
    if (menu.onlick) {
        console.log(menu);
    }
}


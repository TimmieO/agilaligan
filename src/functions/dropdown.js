export function doDropdown(){
    dropdownEventHandler();
}

export function dropdownEventHandler(){
    let devsSpan = document.querySelectorAll(".nav-devs-span")[0];
    let navbar = document.querySelectorAll(".header-navbar")[0];
    let burgerIcon = document.querySelectorAll(".burger-menu")[0];
    let devsInput = document.querySelectorAll(".toggler")[0];
    let dropdownMenu = document.querySelectorAll(".navbar-dropdown")[0];

    devsInput.style.top = devsSpan.offsetTop + "px";
    devsInput.style.left = devsSpan.offsetLeft + "px";
    devsInput.style.height = devsSpan.offsetHeight + "px";
    devsInput.style.width = burgerIcon.offsetWidth + devsSpan.offsetWidth + "px";

    dropdownMenu.style.top = navbar.offsetHeight + "px";
}
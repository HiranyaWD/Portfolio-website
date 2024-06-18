function toggleMenu(){
    const menu= documnet.querySelector(".menu-links");
    const icon= documnet.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
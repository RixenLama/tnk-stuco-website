function openNav(){
    document.getElementById("menu-nav").style.display = "flex";
    document.getElementById("exit-menu").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}



function closeNav(){
    document.getElementById("menu-nav").style.display = "none";
    document.getElementById("exit-menu").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}
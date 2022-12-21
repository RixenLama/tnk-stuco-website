function openNav() {
  document.getElementById("exit-menu").style.display = "block";
  document.getElementById("menu").style.display = "none";
  document.getElementsByTagName("body")[0].dataset.open = "true";
}

function closeNav() {
  document.getElementById("exit-menu").style.display = "none";
  document.getElementById("menu").style.display = "block";
  document.getElementsByTagName("body")[0].dataset.open = "false";
}

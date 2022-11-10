function Open() {
  document.getElementById("navi").classList.add("navi");
  document.getElementById("navi").style.transition = "all 0.5s ease-in-out";
}

function Close() {
  document.getElementById("navi").classList.remove("navi");
  document.getElementById("navi").style.transition = "all 0.5s ease-in-out";
}

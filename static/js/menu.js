function openSideMenu() {
  var w = window.innerWidth;
  if (w > 500) {
    document.getElementById("side-menu").style.width = "330px";
  }
  else {
    document.getElementById("side-menu").style.width = "80%";
  }
    
  // document.getElementById("main").style.marginLeft = "100%";
}
function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

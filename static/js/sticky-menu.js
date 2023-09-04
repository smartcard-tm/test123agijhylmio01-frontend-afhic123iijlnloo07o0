myID = document.getElementById("stickyMenu");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 650) {
    myID.className = "bottomMenu1 show"
  } else {
    myID.className = "bottomMenu1 hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

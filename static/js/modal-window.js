    // Get the modal
    var modal3 = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnContact");
    var btn1 = document.getElementById("btnContact1");
    var btn_consult = document.getElementById("consult-us");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close_btn")

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal3.style.display = "block";
    };

    btn1.onclick = function () {
      document.getElementById("side-menu").style.width = "0";
      modal3.style.display = "block";
    };
    
    btn_consult.onclick = function () {
      modal3.style.display = "block";
    };
        

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal3.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal3.style.display = "none";
      }
    };

    function openNav() {
    var x = document.getElementById("navlinks");
    var y = document.getElementById("main");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.marginLeft = "0";
      y.style.marginRight = "0";
    } else {
      x.style.display = "block";
      y.style.marginLeft = "80vw";
      y.style.marginRight = "-80vw";
    }
  }

    function openUp() {
      var a = document.getElementById("checkout-tab")
      a.style.display = "block";
    }
    
    function closeUp() {
      var b = document.getElementById("checkout-tab")
      b.style.display = "none";
      var message = document.getElementById("name-text").value;
      alert("Hey " + message  + ", Thank you for subscribing")
    }
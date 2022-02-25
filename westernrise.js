    function openNav() {
    var x = document.getElementById("navlinks");
    var y = document.getElementById("main");
    if (x.style.transform === "translateX(-80vw)") {
      x.style.transform = "translateX(0)";
      y.style.marginLeft = "80vw";
      y.style.marginRight = "-80vw";
    } else {
      x.style.transform = "translateX(-80vw)";
      y.style.marginLeft = "0";
      y.style.marginRight = "0";
    }
  }

  /*window.onscroll = function(){scrollFunction()};

  function scrollFunction() {
    var a = document.getElementById("below-bar");
    var b = document.getElementById("logo");
    var c = document.getElementsByClassName("icon")
    var d = document.getElementsByClassName("checkout")
    if (document.body.scrollTop > 200 || documentElement.scrollTop > 200) {
      a.style.backgroundColor = "red";
    } else{
      a.style.backgroundColor = "blue";
    }
  }*/
    

 window.addEventListener('scroll', () => {
    const a = document.getElementById("below-bar");
    const b = document.getElementById("logo");
    let c = document.getElementsByClassName("burger")[0];
    let cc = document.getElementsByClassName("burger")[1];
    let ccc = document.getElementsByClassName("burger")[2];
    const d = document.getElementById("checkout");

    a.style.backgroundColor = "white";
    b.src="Mobile Assignment Images/logo-small.svg";
    b.style.width = "40px";
    d.style.backgroundColor = "#cbc4b6" ;
    d.style.color ="white" ;
    c.style.backgroundColor = "black" ;
    cc.style.backgroundColor = "black" ;
    ccc.style.backgroundColor = "black" ;
  })
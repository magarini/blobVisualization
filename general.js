var menu = document.querySelector(".menu");
var navBar=document.querySelector(".burgerMenu");
var x=document.querySelector(".burger");


function toggleBurger() {


    
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      navBar.style.background="transparent"
      x.innerHTML='<img src="icons/menu.svg">';
      console.log('innerHtml',x.innerHTML)

    } else {
      menu.style.display = "flex";
      // navBar.style.background="#F2F2F2"
      x.innerHTML='<img src="icons/close.svg">';


    }
  } 


  function reportWindowSize() {
   if(window.innerWidth>700){
    menu.style.display = "flex";
   }else{
    menu.style.display = "none";

   }
  }
  
  window.onresize = reportWindowSize;

  window.addEventListener("resize", reportWindowSize);
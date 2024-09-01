var menu = document.querySelector(".menu");
var navBar=document.querySelector(".burgerMenu");
var closeBtn=document.querySelector(".burger");


function toggleBurger() {

  console.log('clicked')
    
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      navBar.style.background="transparent"
      closeBtn.innerHTML='<img src="/icons/menu.svg">';
      console.log('innerHtml',closeBtn.innerHTML)

    } else {
      menu.style.display = "flex";
      // navBar.style.background="#F2F2F2"
      closeBtn.innerHTML='<img src="/icons/close.svg">';


    }
  } 


  function reportWindowSize() {
    console.log("screen")

   if(window.innerWidth>1040){
    menu.style.display = "flex";
   }else{
    menu.style.display = "none";

   }
  }
  
  window.onresize = reportWindowSize;

  window.addEventListener("resize", reportWindowSize);





  
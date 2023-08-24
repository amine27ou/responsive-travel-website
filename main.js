window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
  
    if (window.scrollY >= 10) {
      navbar.classList.add("active");
    }
    else{
        navbar.classList.remove("active");
    }
  });

let hamburger = document.querySelector(".hamburger");
let navlinks = document.querySelector(".navlinks ul");

hamburger.addEventListener("click",function(){
    this.classList.toggle("active");
    navlinks.classList.toggle("active");
})
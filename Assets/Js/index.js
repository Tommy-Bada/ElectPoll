document.getElementById("hamburger-menu").addEventListener("click", function(){
    let mobileMenu = document.querySelector("#mobile-menu");
    let hamburgerLine = document.getElementsByClassName("hamburger-line");
    if(mobileMenu.classList.contains("slidedown") == false ){
        mobileMenu.classList.add("slidedown");
        mobileMenu.style.opacity = 1;
        mobileMenu.style.transform = ("translateY(0vh)");
        hamburgerLine[1].style.width = "2rem";
        hamburgerLine[2].style.width = "1rem";


    }
    else{
        mobileMenu.classList.remove("slidedown");
        mobileMenu.style.opacity = 0;
        mobileMenu.style.transform = ("translateY(-100vh)");
        hamburgerLine[1].style.width = "3rem";
        hamburgerLine[2].style.width = "3rem";
    }
})
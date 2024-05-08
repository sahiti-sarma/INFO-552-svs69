// selector for burger button


var burgerButton = document.querySelector("#burger-button");
var mainNav = document.querySelector("#main-nav");

var isNavVisible = false;

burgerButton.addEventListener("click", () => {
    // console.log("button working");

    

    if (isNavVisible === false) {
        mainNav.classList.remove("hide-menu");
        isNavVisible = true;
    }else{
        mainNav.classList.add("hide-menu");
        isNavVisible = false;
    }
        
})

mainNav.addEventListener("click", () => {
    mainNav.classList.add("hide-menu");
    canSeeMenu = false;
})



const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");

menuBtn.addEventListener("click", () =>{
    if(sideNav.classList.contains("active")){
        sideNav.classList.remove("active");
        return;
    }
    sideNav.classList.add("active");

})

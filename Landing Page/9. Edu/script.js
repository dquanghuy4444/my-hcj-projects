const navLinks =document.getElementById("navLinks");

const toggleMenu = () =>{
    console.log(navLinks.style.right)
    if(navLinks.style.right === "0px"){
        navLinks.style.right = "-200px";
    } else{
        navLinks.style.right = "0px";
    }
}
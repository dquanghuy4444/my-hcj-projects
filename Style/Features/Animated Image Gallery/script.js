const banner = document.getElementById("banner");

const btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", function (){
    banner.src = "images/pic1.png";

    this.classList.add("active");
    animation();
})

btn[1].addEventListener("click", function (){
    banner.src = "images/pic2.png";

    this.classList.add("active");
    animation();
})

btn[2].addEventListener("click", function (){
    banner.src = "images/pic3.png";

    this.classList.add("active");
    animation();
})


const animation = () =>{
    banner.classList.add("zoom");

    setTimeout(() => {
        banner.classList.remove("zoom");
    } , 1e3)
}
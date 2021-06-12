var menuitems = document.getElementById("menuitems");

menuitems.style.maxHeight ="0px";

function menutoggle(){
    menuitems.style.maxHeight =="0px" ? menuitems.style.maxHeight ="200px" : menuitems.style.maxHeight = "0px";
}

const productImg = document.getElementById("product-img");
const smallImg = document.getElementsByClassName("small-img");

for (let index = 0; index < smallImg.length; index++) {
    smallImg[index].onclick = () =>{
        productImg.src = smallImg[index].src;
    }
}
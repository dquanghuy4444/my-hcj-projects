let elThumbLi = document.querySelectorAll(".thumb li");

for(let i = 0 ; i< elThumbLi.length; i++){
    elThumbLi[i].onclick = function(){
        let index = 0;
        while(index < elThumbLi.length){
            elThumbLi[index++].className = "checked"
        }
        elThumbLi[i].className = "checked active"
    }
}

function onClicksliderImage(name , color){
    document.querySelector(".fruits").src = `./images/${name}.png`;

    handleChangeBgColor(color)
}

function handleChangeBgColor(color){
    document.querySelector(".bg").style.background = color;
}
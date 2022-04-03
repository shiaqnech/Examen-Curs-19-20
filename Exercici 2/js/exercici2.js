
var colours_array = obtenirArrayColors();
var div_colors = document.getElementById("colors");
var select = document.getElementById("colorSelect");
var temp = [];
var array_options = [];

document.addEventListener('DOMContentLoaded', (event) =>{
    generateColorDivs();


})
function generateColorDivs(){
    for(var i = 0; i < colours_array.length; i++){
        let element = document.createElement("div");
        element.style.backgroundColor = colours_array[i];
        element.setAttribute("value",colours_array[i]);
        addListeners(element);
        div_colors.appendChild(element);
    }
}
function addListeners(e){
    e.addEventListener('mouseover', (event) => {
        e.style.width = "14px";
        e.style.height = "14px";
        e.style.margin = "0px";
    })
    e.addEventListener('mouseout', (event) => {
        e.style.width = "10px";
        e.style.height = "10px";
        e.style.margin = "2px";
    })
    e.addEventListener('click', (event) =>{
        let element = document.createElement("option");
        element.innerText = e.getAttribute('value');
        div_colors.appendChild(element);
        select.appendChild(element);
        orderAlphabetically(element);
        div_colors.removeChild(e);
    })
}

function orderAlphabetically(element){
    array_options = select.innerText.split("\n");
    array_options.sort();
    console.log(array_options);    
}

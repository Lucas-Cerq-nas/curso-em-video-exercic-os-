
const inpt = document.getElementById("ivelo")
const btn = document.getElementById("check")
const div = document.querySelector(".texto")

btn.addEventListener("click", function(){

if(inpt.value >= 30){

div.innerHTML = ` <p>sua velocidade é ${inpt.value} Multado!</p>`

}else{

div.innerHTML = ` <p>sua velocidade é ${inpt.value} vc esta muito lento</p> `

}



})
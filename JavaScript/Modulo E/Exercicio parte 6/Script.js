const input_numb = document.getElementById("inum")
const Select = document.getElementById("iSelec")

function Calcular_tabu(){

if(input_numb.value != 0){
    let Num= Number(input_numb.value)
    let c = 1

    Select.innerHTML = ""

while(c <= 10){
    let item = document.createElement("option")
    //let res = Num * c
    item.text = ` ${Num} x ${c} = ${Num * c} ` 
    Select.appendChild(item)
    
    c++
}

}else{
    alert('[ERRO] coloque um valor')
}


}

// Fazendo um sistema para armazenar Valores em Arrays :)
const Inpt = document.getElementById("Inum")
 const btn_save = document.getElementById("Salvar")
  const write_word = document.querySelector("#paragrafos")
   const btn_show = document.getElementById("Mostrar")

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
        // Saber sé a array esta vazia ou não
function isLista(list, num){
    if(list.indexOf(Number(num)) == -1){
        return true
    }else{
        return false
    }
}


 let Armazenar_V = []
 btn_save.addEventListener("click", () => {
    
    if(isNumero(Inpt.value) && isLista(Armazenar_V, Inpt.value)){
        Armazenar_V.push(Number(Inpt.value))
        Inpt.value = "Salvo"
        setTimeout(() =>{
            Inpt.value = ""
        },250)
    }else{
        alert(`Valor Invalido ou já esta armazenado [${Armazenar_V}]`)
        Inpt.value = ""
    }

    Inpt.focus()
 })

 

        // Fazer esse sistema para mostrar na tela 
    btn_show.addEventListener("click", () => {
        let organizar = Armazenar_V.sort((a,b) => a-b)
        let modificador = Armazenar_V.map(mudar => mudar * 4)
        let filter = Armazenar_V.filter(filtrar => filtrar > 5)
        let find = Armazenar_V.find(procurar => procurar > 5)
        let findindex = Armazenar_V.findIndex(find_key_first => find_key_first > 5)

        if(Armazenar_V.length !== 0){ // se a lista n estiver vazia

            write_word.innerHTML = "" // Apaga os valores quando um novo for colocado
        }else{
            alert("Coloque um valor")
        }
    write_word.innerHTML += `<p>Este é sua caixa de armazenamento/Array: ${Armazenar_V}</p>`
    write_word.innerHTML += `<p>Como ele fica organizado: [${organizar}]</p>`
    write_word.innerHTML += `<p>Transformando: [${Armazenar_V.join(" - ")}] </p>`
    write_word.innerHTML += `<p>A no total: ${Armazenar_V.length} numeros armazenados</p>`
    write_word.innerHTML += `<p>o ultimo item foi tirado: [${Armazenar_V.pop()}]</p>` 
    write_word.innerHTML += `<p>o Primeiro item foi tirado: [${Armazenar_V.shift()}]</p>`
    write_word.innerHTML += `<p>Usando metodos para modificar ele: [${modificador}] x 4 </p>`
    write_word.innerHTML += `<p>Lista > 5: [${filter}] </p>`
    write_word.innerHTML += `<p>Procura o primeiro > 5 [${find}] </p>`
    write_word.innerHTML += `<p>Procura primeiro key > 5 [${findindex}] </p>`
    write_word.innerHTML += `<p>converte para String: ${Armazenar_V.toString()}</p>`

    write_word.innerHTML += `<h2>Spread ...</h2>`
        let exemplo = ["Isso é um Spread ...", ...Armazenar_V]
    write_word.innerHTML += `<p>Ele espalha os elementos de um array ou objeto: ${exemplo} </p>`

    /*
    Inpt.addEventListener("input", () => {
        write_word.innerHTML += `<p>Verificar se o numero esta na Lista: [${Armazenar_V.includes(Number(Inpt.value))}]</p>`
     })
    */

        console.log(`btn_show: ${Armazenar_V}`)
    })



 Inpt.focus()


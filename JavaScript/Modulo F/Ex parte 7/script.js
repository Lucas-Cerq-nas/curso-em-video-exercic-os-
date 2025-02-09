
let num = document.getElementById('Inum')
let Lista = document.querySelector('#Ilist')
let res = document.getElementById('res')


let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }

}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){

    // Add o numero       //  Numero n esta na lista
   if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ` Valor ${num.value} adicionado`
        Lista.appendChild(item) 
        res.innerHTML = ''
   }else{
    alert('Valor inválido ou já encontrado na lista.')
    
   }
   num.value = ''
  num.focus()


}


function Finalizar(){
    if(valores == 0){
        alert('esta Vazio, coloque um resultado')
        num.focus()
    }else{
        let total = valores.length
        let maior = valores[0] // 0 = 1°
        let menor = valores[0]
        let soma = 0
        let media = 0

             //chave   //array 
        for(let pos in valores){
            soma = soma + valores[pos]  // Soma entre valores[da posição/pos]


            if(valores[pos] > maior){
                maior = valores[pos]

                if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }

            
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos: ${total} número cadastrados.</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>a soma entre eles ${soma}</p>`
        res.innerHTML += `<p>A media deles são ${media}</p>`
    }

}

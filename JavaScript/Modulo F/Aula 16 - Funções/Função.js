    //Parametro sendo retornado
function parimp(n){

    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }

}

let res = parimp(2)

console.log(res)

    // Parametros com Valores
function soma(n1=0, n2=0){

return n1 + n2

}

console.log(soma(1))


    // Função dentro de uma Variavel

let va = (n1) =>{

    return n1


}

console.log(va(4))

    // Fatorial exemplo

function Fatorial(n){
    let fat = 1
        for(let c = n; c > 1; c--){
            fat *= c
        }
    
    return fat        

}

console.log(Fatorial(5))


function fatorial(n){

    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }

    // 1º n = (parametro)
    // 2º n * função fatorial(n-1)
    // 3º (n-1) == (parametro - 1)


}
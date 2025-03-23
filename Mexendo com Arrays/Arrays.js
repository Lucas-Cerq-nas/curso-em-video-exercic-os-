let arr = [1,2];  
// if e else
if (arr) { 
    console.log("O array existe!");
}

if(!arr.length){
    console.log("o Array n existe")
}else{
    console.log("o Arrays existe")
}

console.log("~~~~")

    // Propriedades
let numeros = [10, 20, 30, 40];
console.log(numeros.length); // 4

numeros.length = 3

console.log(numeros)

console.log("~~~~")

    // Metodos

/* 
.push(valor)
.pop()
.unshift(valor)
.shift() 
*/

let n1 = [1,2,3,4,5]

n1.push(6) // Adiciona no final
n1.pop() // Remove o ultimo
n1.unshift(10) // Adiciona no início
n1.shift() // Remove o Inicio
console.log(n1)


console.log("~~~~")
    // Acessando e modificando arrays

/*
.at(index) 	Retorna um valor específico
.indexOf(valor)


*/
let modificador = [1,2,3,50,100]

console.log(modificador.at(-1)) // Pega o ultimo valor 

console.log(modificador.indexOf(3)) // 	Retorna o índice do valor/ keys

console.log(modificador.includes(4)) // Verifica se contém o valor,
                                    
console.log(modificador.includes(2)) //  Se tiver ele retorna true se não false


console.log("~~~~")
    // Iterando sobre arrays
/*
.forEach(callback) Executa uma função para cada elemento
.map(callback) 	Retorna um novo array modificando os valores
.filter(callback) Retorna um novo array com elementos filtrados
.find(callback)  Retorna o primeiro elemento que satisfaz a condição
.findindex(callback) Retorna o índice do primeiro elemento que satisfaz a condição
*/
let numeros1 = [5, 10, 15, 20, 30];

let mostrarEach = numeros1.forEach(n => console.log(`forEach: ${n}`))

let dobrado = numeros1.map(n => n * 2);
console.log(dobrado); // [10, 20, 30, 40, 60] modifica

let maioresQue10 = numeros1.filter(n => n > 10);
console.log(maioresQue10); // [15, 20, 30] acha os maiores 

let primeiroMaiorQue10 = numeros1.find(n => n > 10);
console.log(primeiroMaiorQue10); // 15 acha o numero

let indiceMaiorQue10 = numeros1.findIndex(n => n > 10);
console.log(`keys: ${indiceMaiorQue10}`); // 2 acha a key

console.log("~~~~")
    // Transformando arrays em strings

/* 
.join(separador) Junta elementos em uma string
.toString() Converte para string
*/

let Transformando = [1, 2, 3] 
console.log(Transformando.join(" - "))
console.log(Transformando.toString())

console.log("~~~~")
    // Ordenação e manipulação

/* 
.sort() Ordena o array (converte tudo para string antes)
.reverse() Inverte a ordem do array
*/
let Ordenando = [2, 10, 50, 3, 40]

console.log(Ordenando.sort()) // [10, 2, 3, 40, 50] String
console.log(Ordenando.sort((a , b) => a - b))  // [2, 3, 10, 40, 50] numerico
console.log(Ordenando.reverse())


console.log("~~~~")
    // Operador ... (Spread e Rest)

    // Spread Operator (Espalhamento)
    //  Ele espalha os elementos de um array ou objeto:

let array = [1,2,3]

 let Array2 = [...array, 4, 5, 6]

 console.log(`Spread: ${Array2}`)

    // Rest Parameter (Parâmetro Rest)
    // Ele agrupa argumentos em um array dentro de funções:

    function soma(...numeros) {
        return numeros.reduce((total, n) => total + n, 0);
    }
    console.log(soma(1, 2, 3, 4)); // 10 
    
    let numerosR = [10, 20, 30, 40];


    // outro exemplo melhor sobre o .reduce()

    /* Sintaxe
    array.reduce((acumulador, valorAtual, índice) => { 
    // código aqui 
    }, valorInicial);

🔹 acumulador (total) → Vai armazenando o resultado da soma (ou qualquer outra operação).
🔹 valorAtual (valor) → O elemento atual do array que está sendo processado.
🔹 índice (index) → A posição atual dentro do array (começa em 0).
🔹 valorInicial → O valor inicial do acumulador (opcional).




    */
let resultado = numerosR.reduce((total, valor, indice) => {
    console.log(`Índice ${indice} | Valor ${valor} | Total ${total}`);
    return total + valor;
}, 0);z

console.log("Resultado final:", resultado);

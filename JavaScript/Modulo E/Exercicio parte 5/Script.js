function contar() {
    let ini = document.getElementById("Iinicio")
    let fim = document.getElementById("Ifim")
    let passo = document.getElementById("Ipassos")
    let res = document.getElementById("Resultado")

        if(ini.value == 0 || fim.value == 0 || passo.value == 0){
            alert("[ERRO] esta faltando dados")
            res.innerHTML = "Impossivel contar!"
        }else{
           res.innerHTML = `Contando: <br>`
            let i = Number(ini.value)
            let f = Number(fim.value)       // Variaveis
            let p = Number(passo.value)
            if(p <= 0){
            alert(" o seu Passo Esta sem valor! Passo agr sera 1")
            p = 1
            }

            if(i < f){   //contagem Crescente
                for(let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \r\n \u{1F449} `
    
                }

            }else{      //contagem Regressiva

                for(let c = i; c >= f; c -= p){ // Inicio for >= q Fim
                    res.innerHTML += ` ${c} \r\n \u{1F449} `
                }
               

            }

            res.innerHTML += ` \u{1F3C1} ` // FIM

        }





}
function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let Form_ano = document.getElementById("txtano")
    let res = document.querySelector("#res")

    if (Form_ano.value.length == 0 || Form_ano.value > ano){
        alert("Verifique os dados e tente novamente!")
        
    }

    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(Form_ano.value)
    let genero = ""

    let img = document.createElement("img")

    img.setAttribute('id', 'foto')

   

    if(fsex[0].checked){
        genero = "Homem"

        if(idade >= 0 && idade < 10){
            img.setAttribute('src','img/bebe homem.jpg')

            

        }else if(idade < 21){

            img.setAttribute('src', 'img/jovem.jpg')

        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'img/legoshi.jpg')

        }else {
            // velho kkkk
            img.setAttribute('src', 'img/download.jpg')
        }
        
    }else if(fsex[1].checked){

        genero = "mulher"

        if(idade >= 0 && idade < 10){
            // Crionça

        }else if(idade < 21){

            //jovem

        }else if(idade < 50){
            //adulto


        }else if(idade < 80){
            // velho kkkk

        }
    }
    res.innerHTML = `<p> Seu genero: ${genero} sua idade: ${idade}</p>`
    res.appendChild(img)

}
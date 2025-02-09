
function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    let corpo = document.body.style
    msg.innerHTML = `Agora são  ${hora} horas.`

    if(hora >= 0 && hora < 12){
        // bom dia 
        img.src = 'img/dia.jpg'
        corpo.background = "#e2cd9f"

    }else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'img/tarde.jpg'
        corpo.background = "#b9846f"

    }else{
        //boa noite
        img.src = 'img/noite.jpg'
        corpo.background = "#515154"
    }
}


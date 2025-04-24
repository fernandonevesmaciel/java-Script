function carregar(){
    let msg = window.document.querySelector('#mensagem');
    let img = window.document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = '#c9dce3'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e39f7d'
    } else {
        // boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#037fc4'
    }
}


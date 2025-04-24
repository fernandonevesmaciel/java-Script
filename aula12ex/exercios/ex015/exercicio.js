function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        var genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/criança-m.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src','imagens/jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/adulto-m.png')
            }else{
                // idoso
                img.setAttribute('src','imagens/idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/criança-f.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src','imagens/jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/adulto-f.png')
            }else{
                // idoso
                img.setAttribute('src','imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

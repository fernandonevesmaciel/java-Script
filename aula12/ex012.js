var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var secundos = agora.getSeconds()


console.log(`Agora são exatamente ${hora}:${minutos}:${secundos}`)
if(hora <= 5){
    console.log('boa madrugada')
}else if(hora < 12){
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else if(hora >= 18){
    console.log('boa Noite!')
}


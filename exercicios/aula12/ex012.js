//turnos do dia

var agora = new Date()
var hora = agora.getHours()

console.log(`São ${hora} horas.`)

if(hora<6){
    console.log('É madrugada')
} else if(hora<12){
    console.log('É manhã')
} else if(hora<18){
    console.log('É tarde')
} else if(hora<24){
    console.log('É noite')
} else {
    console.log('Esse horário não existe')
}
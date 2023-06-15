function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
if(hora<12){
    //BOM DIA
    img.src = 'manha.png'
    window.document.body.style.background = '#8b8b54'
} else if(hora<18){
    //BOA TARDE
    img.src = 'tarde.png'
    window.document.body.style.background = '#bd8024'
} else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#45459e'
}
}